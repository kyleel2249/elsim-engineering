'use client';

import { useCallback, useEffect, useId, useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { cdnUrl } from '@/lib/cdn';
import type { WorkPhoto } from '@/lib/data/media';

/**
 * Field photography gallery.
 *
 * Laid out as CSS columns (a masonry) rather than a fixed-ratio grid, because
 * every photo keeps its own natural aspect ratio this way — the standing
 * decision on this site is that photography is never cropped, and a masonry
 * is the layout that gets that for free instead of needing a letterbox.
 *
 * Clicking a tile opens a full-size lightbox with keyboard navigation
 * (arrow keys, Escape) and focus trapped inside while open.
 */
export function WorkGallery({
  photos,
  className,
}: {
  photos: WorkPhoto[];
  className?: string;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const dialogId = useId();

  const close = useCallback(() => {
    const returningIndex = activeIndex;
    setActiveIndex(null);
    if (returningIndex !== null) triggerRefs.current[returningIndex]?.focus();
  }, [activeIndex]);

  const step = useCallback(
    (delta: number) => {
      setActiveIndex((i) => {
        if (i === null) return i;
        return (i + delta + photos.length) % photos.length;
      });
    },
    [photos.length]
  );

  useEffect(() => {
    if (activeIndex === null) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault();
        close();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        step(1);
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        step(-1);
      }
    }

    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeIndex, close, step]);

  if (photos.length === 0) return null;

  const active = activeIndex !== null ? photos[activeIndex] : null;

  return (
    <div className={className}>
      <div className="columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            ref={(el) => {
              triggerRefs.current[index] = el;
            }}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative block w-full break-inside-avoid overflow-hidden rounded border text-left"
            style={{ borderColor: 'var(--theme-border)' }}
            aria-haspopup="dialog"
          >
            <Image
              src={cdnUrl(photo.src)}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              className="w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              quality={88}
            />
            <span
              className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-navy-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden
            >
              <span className="flex items-center gap-1.5 p-3 text-xs font-medium text-white">
                <ZoomIn className="h-3.5 w-3.5" aria-hidden />
                View
              </span>
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={active.alt}
            id={dialogId}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            <div
              className="absolute inset-0 bg-navy-950/90 backdrop-blur-sm"
              onClick={close}
              aria-hidden
            />

            <motion.figure
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 flex max-h-[88vh] max-w-4xl flex-col items-center"
            >
              <Image
                src={cdnUrl(active.src)}
                alt={active.alt}
                width={active.width}
                height={active.height}
                className="max-h-[76vh] w-auto rounded object-contain"
                sizes="90vw"
                quality={95}
                priority
              />
              <figcaption className="mt-4 max-w-xl text-center text-sm text-navy-100">
                {active.alt}
              </figcaption>
            </motion.figure>

            <button
              type="button"
              onClick={close}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              aria-label="Close"
            >
              <X className="h-5 w-5" aria-hidden />
            </button>

            {photos.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => step(-1)}
                  className="absolute left-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="h-5 w-5" aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  className="absolute right-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  aria-label="Next photo"
                >
                  <ChevronRight className="h-5 w-5" aria-hidden />
                </button>
                <p className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 text-xs text-navy-200">
                  {(activeIndex ?? 0) + 1} / {photos.length}
                </p>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
