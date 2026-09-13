'use client';

import Image from 'next/image';
import { clsx } from 'clsx';

interface ElsimLogoProps {
  /** Visual size preset */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Show wordmark text beside mark */
  withWordmark?: boolean;
  /** Enable subtle CSS animation (gear rotation via SVG overlay) */
  animated?: boolean;
  className?: string;
  priority?: boolean;
}

const sizeMap = {
  sm: { box: 32, text: 'text-sm' },
  md: { box: 40, text: 'text-base' },
  lg: { box: 56, text: 'text-lg' },
  xl: { box: 80, text: 'text-xl' },
} as const;

/**
 * Official ELSIM logo mark.
 * Uses the authentic PNG asset at /assets/elsim/logo.png
 * Responsive sizes; optional CSS animation for gear energy feel.
 */
export function ElsimLogo({
  size = 'md',
  withWordmark = false,
  animated = false,
  className,
  priority = false,
}: ElsimLogoProps) {
  const { box, text } = sizeMap[size];

  return (
    <span className={clsx('inline-flex items-center gap-2.5', className)}>
      <span
        className={clsx(
          'relative shrink-0',
          animated && 'logo-spin-slow'
        )}
        style={{ width: box, height: box }}
      >
        <Image
          src="/assets/elsim/logo.png"
          alt="ELSIM Engineering Firm"
          width={box * 2}
          height={box * 2}
          className="h-full w-full object-contain"
          priority={priority}
        />
      </span>
      {withWordmark && (
        <span className="hidden sm:flex flex-col leading-none">
          <span className={clsx('font-display font-bold tracking-tight text-charcoal', text)}>
            ELSIM
          </span>
          <span className="text-[10px] uppercase tracking-[0.18em] text-charcoal-500 mt-0.5">
            Engineering Firm
          </span>
        </span>
      )}
    </span>
  );
}

/**
 * Pure SVG recreation of the ELSIM mark — crisp at any size,
 * fully animatable (gear rotation + circuit pulse).
 * Use when the PNG is not yet installed or for 2D motion branding.
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
      className={clsx(className)}
      aria-hidden="true"
    >
      {/* Outer gear ring */}
      <g className={animated ? 'origin-center animate-[spin_24s_linear_infinite]' : ''} style={{ transformOrigin: '100px 100px' }}>
        <circle cx="100" cy="100" r="78" stroke="#1a1a1a" strokeWidth="6" fill="none" />
        {/* Gear teeth */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x1 = 100 + Math.cos(angle) * 72;
          const y1 = 100 + Math.sin(angle) * 72;
          const x2 = 100 + Math.cos(angle) * 88;
          const y2 = 100 + Math.sin(angle) * 88;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#1a1a1a"
              strokeWidth="10"
              strokeLinecap="round"
            />
          );
        })}
      </g>

      {/* Burgundy gear arc (right side) */}
      <path
        d="M 160 60 A 72 72 0 0 1 160 140"
        stroke="#941A1D"
        strokeWidth="14"
        fill="none"
        strokeLinecap="round"
        className={animated ? 'origin-center animate-[spin_18s_linear_infinite_reverse]' : ''}
        style={{ transformOrigin: '100px 100px' }}
      />

      {/* Circuit board pattern */}
      <g stroke="#1a1a1a" strokeWidth="2.5" fill="none">
        <path d="M70 85 H90 V75 H110" className={animated ? 'animate-pulse' : ''} />
        <path d="M70 100 H100 V90 H120" />
        <path d="M70 115 H95 V125 H115" className={animated ? 'animate-pulse' : ''} />
        <circle cx="70" cy="85" r="3" fill="#941A1D" />
        <circle cx="70" cy="100" r="3" fill="#1a1a1a" />
        <circle cx="70" cy="115" r="3" fill="#941A1D" />
        <circle cx="110" cy="75" r="3" fill="#1a1a1a" />
        <circle cx="120" cy="90" r="3" fill="#941A1D" />
        <circle cx="115" cy="125" r="3" fill="#1a1a1a" />
      </g>

      {/* Centre text */}
      <text
        x="100"
        y="108"
        textAnchor="middle"
        fill="#1a1a1a"
        fontFamily="system-ui, sans-serif"
        fontWeight="800"
        fontSize="22"
        letterSpacing="1"
      >
        ELSIM
      </text>
      <text
        x="100"
        y="124"
        textAnchor="middle"
        fill="#1a1a1a"
        fontFamily="system-ui, sans-serif"
        fontWeight="600"
        fontSize="7"
        letterSpacing="1.5"
      >
        ENGINEERING FIRM
      </text>
    </svg>
  );
}
