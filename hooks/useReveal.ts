'use client';

import { useEffect, useRef, useState } from 'react';

interface RevealOptions {
  /** Fraction of the element that must be visible before revealing. */
  threshold?: number;
  /** Margin around the viewport, CSS shorthand. */
  rootMargin?: string;
  /** Reveal once and stop observing. Default true. */
  once?: boolean;
}

/**
 * Reveals an element the first time it scrolls into view.
 *
 * Falls back to "already revealed" when IntersectionObserver is unavailable
 * or the visitor prefers reduced motion, so content is never hidden by a
 * feature that failed to load.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.15,
  rootMargin = '0px 0px -10% 0px',
  once = true,
}: RevealOptions = {}) {
  const ref = useRef<T>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced || typeof IntersectionObserver === 'undefined') {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setRevealed(true);
            if (once) observer.disconnect();
          } else if (!once) {
            setRevealed(false);
          }
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, revealed };
}

/**
 * Counts up to `value` once the element enters the viewport.
 * Returns the current display value and the ref to attach.
 */
export function useCountUp(value: number, durationMs = 1400) {
  const { ref, revealed } = useReveal<HTMLSpanElement>({ threshold: 0.4 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!revealed) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      setDisplay(value);
      return;
    }

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(value * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [revealed, value, durationMs]);

  return { ref, display };
}
