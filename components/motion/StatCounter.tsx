'use client';

import { useCountUp } from '@/hooks/useReveal';

interface StatCounterProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  /** 'default' matches the surrounding theme; 'light' is for use on a dark,
   * fixed-navy surface (e.g. the hero panel) regardless of the active theme. */
  tone?: 'default' | 'light';
}

/** A single figure that counts up when it scrolls into view. */
export function StatCounter({ value, label, suffix = '', prefix = '', tone = 'default' }: StatCounterProps) {
  const { ref, display } = useCountUp(value);
  const isLight = tone === 'light';

  return (
    <div
      className="border-l-2 pl-4"
      style={{ borderColor: isLight ? '#00A9D6' : 'var(--theme-accent)' }}
    >
      <p
        className="font-display text-3xl font-bold tabular-nums sm:text-4xl"
        style={{ color: isLight ? '#FFFFFF' : 'var(--theme-text)' }}
      >
        <span ref={ref}>
          {prefix}
          {display}
        </span>
        {suffix}
      </p>
      <p className="mt-1 text-sm" style={{ color: isLight ? 'rgba(255,255,255,0.65)' : 'var(--theme-text-muted)' }}>
        {label}
      </p>
    </div>
  );
}
