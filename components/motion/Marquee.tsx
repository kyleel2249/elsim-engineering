'use client';

import { cn } from '@/lib/utils';

/**
 * Continuous horizontal rail. The track is duplicated so the translate loop is
 * seamless; the duplicate is hidden from assistive technology.
 * Pauses on hover and, via globals.css, freezes under reduced-motion.
 */
export function Marquee({
  items,
  className,
  slow = false,
}: {
  items: string[];
  className?: string;
  slow?: boolean;
}) {
  return (
    <div
      className={cn('group relative overflow-hidden', className)}
      role="list"
      aria-label="Regions where ELSIM Engineering has delivered projects"
    >
      <div
        className={cn(
          'flex w-max',
          slow ? 'animate-marquee-slow' : 'animate-marquee',
          'group-hover:[animation-play-state:paused]'
        )}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
            {items.map((item) => (
              <span
                key={`${copy}-${item}`}
                role={copy === 0 ? 'listitem' : undefined}
                className="flex items-center whitespace-nowrap px-6 py-3 text-sm font-medium"
                style={{ color: 'var(--theme-text-muted)' }}
              >
                <span className="mr-6 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
