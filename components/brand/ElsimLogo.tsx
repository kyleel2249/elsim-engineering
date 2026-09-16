'use client';

import Image from 'next/image';
import { clsx } from 'clsx';
import { media } from '@/lib/data/media';
import { cdnUrl } from '@/lib/cdn';
import { useTheme } from '@/components/theme/ThemeProvider';

interface ElsimLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  withWordmark?: boolean;
  className?: string;
  priority?: boolean;
  /** Force the light-ink variant regardless of theme (for dark panels). */
  inverse?: boolean;
}

const sizeMap = {
  sm: { box: 30, text: 'text-sm' },
  md: { box: 38, text: 'text-base' },
  lg: { box: 46, text: 'text-lg' },
  xl: { box: 80, text: 'text-2xl' },
} as const;

/**
 * ELSIM brand lockup.
 *
 * Uses the supplied master artwork rather than a redrawn approximation. The
 * background-knocked-out variant sits on light themes; the light-ink variant is
 * swapped in on the dark theme, where the navy would otherwise disappear.
 *
 * The lockup already carries "ENGINEERING FIRM" inside the mark, so the text
 * wordmark beside it is only shown where the mark renders too small to read.
 */
export function ElsimLogo({
  size = 'md',
  withWordmark = false,
  className,
  priority = false,
  inverse,
}: ElsimLogoProps) {
  const { theme } = useTheme();
  const { box, text } = sizeMap[size];
  const useInverse = inverse ?? theme === 'black';
  const asset = useInverse ? media.logoInverse : media.logoMark;

  return (
    <span className={clsx('inline-flex items-center gap-2.5', className)}>
      <span
        className="relative shrink-0 transition-all duration-300"
        style={{ width: box, height: box }}
      >
        <Image
          src={cdnUrl(asset.src)}
          alt={asset.alt}
          width={box * 3}
          height={box * 3}
          className="h-full w-full object-contain"
          priority={priority}
        />
      </span>

      {withWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className={clsx('font-display font-bold tracking-tight', text)}
            style={{ color: 'var(--theme-text)' }}
          >
            ELSIM
          </span>
          <span
            className="mt-0.5 text-[9px] uppercase tracking-[0.18em]"
            style={{ color: 'var(--theme-text-subtle)' }}
          >
            Engineering Firm
          </span>
        </span>
      )}
    </span>
  );
}

/**
 * Vector stand-in for the brand mark.
 *
 * Not the official artwork — it is a simplified gear-and-circuit motif in the
 * theme's own colours, used where a raster image is unsuitable: the loading
 * state behind the lazily-imported 3D logo, and print stylesheets. Kept in the
 * navy/gold brand pair so it never contradicts the real mark beside it.
 */
export function ElsimLogoSvg({
  size = 48,
  animated = true,
  className,
}: {
  size?: number;
  animated?: boolean;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('overflow-visible', className)}
      style={{ color: 'var(--theme-accent)' }}
      aria-hidden="true"
    >
      <g
        className={animated ? 'logo-spin-slow' : undefined}
        style={{ transformOrigin: '100px 100px' }}
      >
        <circle cx="100" cy="100" r="78" stroke="currentColor" strokeWidth="6" fill="none" />
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          return (
            <line
              key={i}
              x1={100 + Math.cos(angle) * 72}
              y1={100 + Math.sin(angle) * 72}
              x2={100 + Math.cos(angle) * 88}
              y2={100 + Math.sin(angle) * 88}
              stroke="var(--theme-accent-2)"
              strokeWidth="10"
              strokeLinecap="round"
            />
          );
        })}
      </g>

      <path
        d="M 160 60 A 72 72 0 0 1 160 140"
        stroke="var(--theme-accent-2)"
        strokeWidth="14"
        fill="none"
        strokeLinecap="round"
      />

      <g stroke="var(--theme-accent-2)" strokeWidth="2.5" fill="none">
        <path d="M70 85 H90 V75 H110" className={animated ? 'current-path' : undefined} />
        <path d="M70 100 H100 V90 H120" />
        <path d="M70 115 H95 V125 H115" className={animated ? 'current-path' : undefined} />
        <circle cx="70" cy="85" r="3" fill="var(--theme-accent-2)" stroke="none" />
        <circle cx="70" cy="100" r="3" fill="currentColor" stroke="none" />
        <circle cx="70" cy="115" r="3" fill="var(--theme-accent-2)" stroke="none" />
        <circle cx="120" cy="90" r="3" fill="var(--theme-accent-2)" stroke="none" />
      </g>

      <text
        x="100"
        y="108"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="var(--font-display), system-ui, sans-serif"
        fontWeight="800"
        fontSize="24"
        letterSpacing="1"
      >
        ELSIM
      </text>
    </svg>
  );
}
