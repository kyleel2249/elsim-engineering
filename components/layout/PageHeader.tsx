import type { ReactNode } from 'react';

/**
 * Shared page masthead. Keeps the eyebrow / title / lede rhythm consistent
 * across every interior page instead of repeating it in each file.
 */
export function PageHeader({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  children?: ReactNode;
}) {
  return (
    <header className="max-w-3xl">
      <p className="text-xs font-semibold tracking-[0.18em] text-accent">{eyebrow}</p>
      <h1
        className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl"
        style={{ color: 'var(--theme-text)' }}
      >
        {title}
      </h1>
      {lede && (
        <p className="mt-4 text-lg leading-relaxed text-pretty" style={{ color: 'var(--theme-text-muted)' }}>
          {lede}
        </p>
      )}
      {children}
    </header>
  );
}
