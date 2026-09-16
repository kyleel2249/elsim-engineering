'use client';

import { useCountUp } from '@/hooks/useReveal';

interface StatCounterProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

/** A single figure that counts up when it scrolls into view. */
export function StatCounter({ value, label, suffix = '', prefix = '' }: StatCounterProps) {
  const { ref, display } = useCountUp(value);

  return (
    <div
      className="border-l-2 pl-4"
      style={{ borderColor: 'var(--theme-accent)' }}
    >
      <p className="font-display text-3xl font-bold tabular-nums sm:text-4xl" style={{ color: 'var(--theme-text)' }}>
        <span ref={ref}>
          {prefix}
          {display}
        </span>
        {suffix}
      </p>
      <p className="mt-1 text-sm" style={{ color: 'var(--theme-text-muted)' }}>
        {label}
      </p>
    </div>
  );
}
