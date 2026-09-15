'use client';

import { useEffect, useRef, useState } from 'react';
import { clsx } from 'clsx';
import { THEMES } from '@/lib/theme';
import { useTheme } from '@/components/theme/ThemeProvider';

/**
 * Fixed top-left theme switcher — pick background theme colours.
 */
export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, []);

  const current = THEMES.find((t) => t.id === theme) ?? THEMES[0];

  return (
    <div
      ref={panelRef}
      className="fixed top-3 left-3 z-[60] sm:top-4 sm:left-4"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-full border border-[var(--theme-border)] bg-[var(--theme-surface-elevated)] px-2.5 py-1.5 shadow-md backdrop-blur-md transition hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={`Background theme: ${current.label}. Open theme picker.`}
      >
        <span
          className="h-5 w-5 shrink-0 rounded-full border border-black/20 shadow-inner"
          style={{ backgroundColor: current.swatch }}
          aria-hidden="true"
        />
        <span className="hidden text-xs font-semibold text-[var(--theme-text)] sm:inline">
          Theme
        </span>
        <svg
          className={clsx(
            'h-3.5 w-3.5 text-[var(--theme-text-muted)] transition-transform',
            open && 'rotate-180'
          )}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {open && (
        <div
          role="listbox"
          aria-label="Background colour themes"
          className="absolute left-0 top-full mt-2 w-44 rounded-xl border border-[var(--theme-border)] bg-[var(--theme-surface-elevated)] p-2 shadow-xl backdrop-blur-md"
        >
          <p className="px-2 pb-1.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--theme-text-muted)]">
            Background
          </p>
          <ul className="space-y-0.5">
            {THEMES.map((t) => {
              const selected = t.id === theme;
              return (
                <li key={t.id}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={selected}
                    onClick={() => {
                      setTheme(t.id);
                      setOpen(false);
                    }}
                    className={clsx(
                      'flex w-full items-center gap-2.5 rounded-lg px-2 py-2 text-left text-sm transition',
                      selected
                        ? 'bg-burgundy/15 font-semibold text-burgundy'
                        : 'text-[var(--theme-text)] hover:bg-[var(--theme-hover)]'
                    )}
                  >
                    <span
                      className="h-5 w-5 shrink-0 rounded-full border border-black/15 shadow-sm"
                      style={{ backgroundColor: t.swatch }}
                      aria-hidden="true"
                    />
                    <span>{t.label}</span>
                    {selected && (
                      <svg
                        className="ml-auto h-4 w-4 text-burgundy"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
