'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { clsx } from 'clsx';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { media } from '@/lib/data/media';
import { cdnUrl } from '@/lib/cdn';

const SLIDES = [
  { ...media.photography.engineerPanelInspection, caption: 'Panel inspection under load' },
  { ...media.photography.solarTeamReview, caption: 'Solar installation review' },
  { ...media.work.linemanPoleTop, caption: 'Working live at height' },
  { ...media.photography.technicianPanelWork, caption: 'Switchgear and control panel works' },
  { ...media.work.transformerKioskInstallation, caption: 'Transformer kiosk installation' },
  { ...media.photography.siteEngineerLaptop, caption: 'Site engineering and data capture' },
  { ...media.work.cableCoilTransport, caption: 'Line-works cable transport' },
  { ...media.work.transformerRoomOverview, caption: 'Distribution transformer room' },
  { ...media.work.panelWiringTeam, caption: 'Distribution panel wiring' },
  { ...media.work.linemanConductorWork, caption: 'Overhead conductor works' },
  { ...media.work.busbarPanelCloseup, caption: 'Three-phase busbar assembly' },
  { ...media.work.machineHallOverview, caption: 'Industrial machine installation' },
  { ...media.infrastructure.electricalPole, caption: 'Distribution infrastructure' },
  { ...media.work.meterInspection, caption: 'Meter inspection' },
  { ...media.work.facadeConduitInstallation, caption: 'Facade conduit installation' },
  { ...media.work.switchgearCabinetOutdoor, caption: 'Outdoor switchgear works' },
  { ...media.work.poleTeamBriefing, caption: 'Line crew on site' },
  { ...media.work.liftShaftInstallation, caption: 'Lift shaft installation' },
  { ...media.work.breakerPanelInspection, caption: 'Breaker panel inspection' },
  { ...media.work.steelFrameAssembly01, caption: 'Equipment frame assembly' },
  { ...media.work.machinePlatformAssembly, caption: 'Elevated machine assembly' },
  { ...media.work.siteTeamWalkthrough, caption: 'Site walkthrough' },
  { ...media.work.reinforcementConstructionSite, caption: 'Construction site supervision' },
  { ...media.work.steelFrameAssembly02, caption: 'Equipment frame assembly' },
  { ...media.work.domesticScaffoldWork, caption: 'Residential electrical fit-out' },
  { ...media.infrastructure.powerTransmission, caption: 'Transmission works' },
] as const;

const INTERVAL_MS = 5000;

/**
 * Hero photography rail.
 *
 * A CSS cross-fade rather than a 3D scene — a deliberate performance choice for
 * Cloudflare Pages, where the WebGL hero cost far more than it returned.
 *
 * The supplied photographs are small and vary widely in aspect ratio, so each
 * slide is contained rather than cropped and sits on a navy ground with a
 * blurred copy of itself behind it. That fills the frame without inventing
 * pixels or cutting people out of the shot.
 */
export function HeroSlideshow() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const regionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (reducedMotion || paused) return;

    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, INTERVAL_MS);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [reducedMotion, paused, index]);

  const goTo = useCallback((i: number) => {
    setIndex((i + SLIDES.length) % SLIDES.length);
  }, []);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  // Arrow-key control when the carousel has focus.
  function onKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      next();
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      prev();
    }
  }

  const autoplaying = !reducedMotion && !paused;

  return (
    <div
      ref={regionRef}
      className="relative h-full min-h-[300px] w-full overflow-hidden bg-navy-800"
      role="region"
      aria-roledescription="carousel"
      aria-label="ELSIM Engineering project photography"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {SLIDES.map((slide, i) => {
        const current = i === index;
        return (
          <div
            key={slide.src}
            className={clsx(
              'absolute inset-0 transition-opacity duration-700 ease-in-out',
              current ? 'z-[1] opacity-100' : 'z-0 opacity-0'
            )}
            aria-hidden={!current}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${SLIDES.length}: ${slide.caption}`}
          >
            {/* Blurred fill behind the contained image, so the frame is never
                empty and the photograph itself is never cropped. */}
            <Image
              src={cdnUrl(slide.src)}
              alt=""
              aria-hidden
              fill
              className="scale-110 object-cover opacity-30 blur-2xl"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={25}
              priority={i === 0}
            />

            <Image
              src={cdnUrl(slide.src)}
              alt={slide.alt}
              fill
              className="object-contain object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={92}
              priority={i === 0}
            />

            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/85 via-transparent to-navy-950/25"
              aria-hidden
            />
          </div>
        );
      })}

      {/* Caption */}
      <div className="absolute inset-x-0 bottom-0 z-[2] bg-gradient-to-t from-navy-950 to-transparent px-5 pb-14 pt-16">
        <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
          ELSIM on site
        </p>
        <p className="text-sm font-medium text-white sm:text-base" aria-live="polite">
          {SLIDES[index].caption}
        </p>
      </div>

      {/* Slide selection.
          A dot per slide stops being usable once the set is large — this
          carousel now spans the full field-photography set, so past a
          threshold it switches to a scrollable strip of small thumbnails
          plus a numeric counter instead of one dot each. */}
      {SLIDES.length <= 10 ? (
        <div
          className="absolute inset-x-0 bottom-5 z-[2] flex items-center justify-center gap-2"
          role="tablist"
          aria-label="Choose a slide"
        >
          {SLIDES.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Slide ${i + 1}: ${slide.caption}`}
              onClick={() => goTo(i)}
              className={clsx(
                'h-1.5 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold',
                i === index ? 'w-7 bg-gold' : 'w-1.5 bg-white/40 hover:bg-white/70'
              )}
            />
          ))}
        </div>
      ) : (
        <div className="absolute inset-x-0 bottom-5 z-[2] flex flex-col items-center gap-2">
          <div
            className="no-scrollbar flex max-w-[85%] gap-1.5 overflow-x-auto px-2"
            role="tablist"
            aria-label="Choose a slide"
          >
            {SLIDES.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Slide ${i + 1} of ${SLIDES.length}: ${slide.caption}`}
                onClick={() => goTo(i)}
                className={clsx(
                  'h-1 shrink-0 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold',
                  i === index ? 'w-6 bg-gold' : 'w-3 bg-white/35 hover:bg-white/60'
                )}
              />
            ))}
          </div>
          <p className="text-[11px] tabular-nums text-navy-200" aria-hidden>
            {index + 1} / {SLIDES.length}
          </p>
        </div>
      )}

      <SlideButton onClick={prev} side="left" label="Previous slide">
        <ChevronLeft className="h-5 w-5" aria-hidden />
      </SlideButton>
      <SlideButton onClick={next} side="right" label="Next slide">
        <ChevronRight className="h-5 w-5" aria-hidden />
      </SlideButton>

      {/* Autoplay control — WCAG requires a way to stop moving content */}
      {!reducedMotion && (
        <button
          type="button"
          onClick={() => setPaused((v) => !v)}
          className="absolute right-3 top-3 z-[2] flex h-9 w-9 items-center justify-center rounded-full bg-navy-950/60 text-white backdrop-blur-sm transition-colors hover:bg-navy-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          aria-label={paused ? 'Resume slideshow' : 'Pause slideshow'}
        >
          {paused ? <Play className="h-4 w-4" aria-hidden /> : <Pause className="h-4 w-4" aria-hidden />}
        </button>
      )}

      {autoplaying && (
        <div className="absolute inset-x-0 top-0 z-[2] h-0.5 bg-white/10" aria-hidden>
          <div key={index} className="animate-slideshow-progress h-full bg-gold" />
        </div>
      )}
    </div>
  );
}

function SlideButton({
  onClick,
  side,
  label,
  children,
}: {
  onClick: () => void;
  side: 'left' | 'right';
  label: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={clsx(
        'absolute top-1/2 z-[2] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-navy-950/55 text-white backdrop-blur-sm transition-colors hover:bg-navy-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold',
        side === 'left' ? 'left-3' : 'right-3'
      )}
    >
      {children}
    </button>
  );
}
