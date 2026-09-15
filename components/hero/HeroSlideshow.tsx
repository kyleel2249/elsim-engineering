'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { media } from '@/lib/data/media';
import { cdnUrl } from '@/lib/cdn';
import { clsx } from 'clsx';

const SLIDES = [
  {
    ...media.photography.engineerPanelInspection,
    caption: 'Electrical inspection',
  },
  {
    ...media.photography.solarTeamReview,
    caption: 'Solar installation',
  },
  {
    ...media.photography.technicianPanelWork,
    caption: 'Panel works',
  },
  {
    ...media.photography.siteEngineerLaptop,
    caption: 'Site engineering',
  },
  {
    ...media.infrastructure.powerTransmission,
    caption: 'Power transmission',
  },
  {
    ...media.infrastructure.electricalPole,
    caption: 'Distribution infrastructure',
  },
] as const;

/** Auto-advance interval — exactly 5 seconds per slide */
const INTERVAL_MS = 5000;

export function HeroSlideshow() {
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Continuous auto-slide every 5 seconds (always on unless reduced motion)
  useEffect(() => {
    if (reducedMotion) return;

    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, INTERVAL_MS);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [reducedMotion, index]); // reset timer when user manually changes slide

  const goTo = useCallback((i: number) => {
    setIndex((i + SLIDES.length) % SLIDES.length);
  }, []);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  return (
    <div
      className="relative h-full min-h-[320px] w-full overflow-hidden bg-charcoal"
      role="region"
      aria-roledescription="carousel"
      aria-label="ELSIM Engineering project photography — auto-advances every 5 seconds"
    >
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          className={clsx(
            'absolute inset-0 transition-opacity duration-700 ease-in-out',
            i === index ? 'opacity-100 z-[1]' : 'opacity-0 z-0'
          )}
          aria-hidden={i !== index}
        >
          <Image
            src={cdnUrl(slide.src)}
            alt={slide.alt}
            fill
            className="object-contain object-center bg-charcoal"
            sizes="(max-width: 1024px) 100vw, 50vw"
            quality={85}
            priority
            loading="eager"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-charcoal/20 pointer-events-none"
            aria-hidden="true"
          />
        </div>
      ))}

      <div className="absolute bottom-0 left-0 right-0 z-[2] px-5 pb-12 pt-16 bg-gradient-to-t from-charcoal/90 to-transparent">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-burgundy-300 mb-1">
          ELSIM on site
        </p>
        <p className="text-sm sm:text-base font-medium text-white" aria-live="polite">
          {SLIDES[index].caption}
        </p>
      </div>

      <div
        className="absolute bottom-4 left-0 right-0 z-[2] flex justify-center gap-2"
        role="tablist"
        aria-label="Slide selection"
      >
        {SLIDES.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Show slide ${i + 1}: ${slide.caption}`}
            onClick={() => goTo(i)}
            className={clsx(
              'h-1.5 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
              i === index ? 'w-6 bg-burgundy' : 'w-1.5 bg-white/40 hover:bg-white/70'
            )}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={prev}
        className="absolute left-3 top-1/2 z-[2] -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-charcoal/50 text-white backdrop-blur-sm hover:bg-burgundy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
        aria-label="Previous slide"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-3 top-1/2 z-[2] -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-charcoal/50 text-white backdrop-blur-sm hover:bg-burgundy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
        aria-label="Next slide"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {!reducedMotion && (
        <div className="absolute top-0 left-0 right-0 z-[2] h-0.5 bg-white/10" aria-hidden="true">
          <div key={index} className="h-full bg-burgundy animate-slideshow-progress" />
        </div>
      )}
    </div>
  );
}
