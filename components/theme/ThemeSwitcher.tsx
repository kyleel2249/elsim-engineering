'use client';

import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, Palette } from 'lucide-react';
import { THEMES } from '@/lib/theme';
import { useTheme } from '@/components/theme/ThemeProvider';
import { cn } from '@/lib/utils';

/**
 * Colour-theme picker for the ELSIM site.
 *
 * Rebuilt from the stub that previously returned null. Keyboard-complete:
 * Enter/Space opens, arrow keys move between swatches, Escape closes and
 * returns focus to the trigger, and a click outside dismisses.
 */
export function ThemeSwitcher({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const menuId = useId();

  const active = THEMES.find((t) => t.id === theme) ?? THEMES[0];

  const close = useCallback(
    (returnFocus = false) => {
      setOpen(false);
      if (returnFocus) triggerRef.current?.focus();
    },
    []
  );

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: MouseEvent | TouchEvent) {
      if (!containerRef.current?.contains(event.target as Node)) close();
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault();
        close(true);
      }
    }

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('touchstart', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('touchstart', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open, close]);

  // Move focus into the menu when it opens.
  useEffect(() => {
    if (!open) return;
    const index = Math.max(
      0,
      THEMES.findIndex((t) => t.id === theme)
    );
    optionRefs.current[index]?.focus();
  }, [open, theme]);

  function onOptionKeyDown(event: React.KeyboardEvent, index: number) {
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
    event.preventDefault();
    const delta = event.key === 'ArrowDown' ? 1 : -1;
    const next = (index + delta + THEMES.length) % THEMES.length;
    optionRefs.current[next]?.focus();
  }

  return (
    <div ref={containerRef} className={cn('relative', className)}>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        aria-label={`Colour theme: ${active.label}. Change theme`}
        className="inline-flex h-9 items-center gap-2 rounded border px-2.5 text-sm transition-colors"
        style={{
          borderColor: 'var(--theme-border)',
          backgroundColor: 'var(--theme-surface)',
          color: 'var(--theme-text)',
        }}
      >
        <Palette className="h-4 w-4" aria-hidden />
        <span
          className="h-3.5 w-3.5 rounded-full border"
          style={{ backgroundColor: active.swatch, borderColor: 'var(--theme-border-strong)' }}
          aria-hidden
        />
        <span className="hidden sm:inline text-xs font-medium">{active.label}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id={menuId}
            role="menu"
            aria-label="Colour theme"
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 z-50 mt-2 w-56 origin-top-right overflow-hidden rounded border shadow-panel-lg"
            style={{
              borderColor: 'var(--theme-border)',
              backgroundColor: 'var(--theme-surface-raised)',
            }}
          >
            <p
              className="border-b px-3 py-2 text-[11px] font-medium"
              style={{ borderColor: 'var(--theme-border)', color: 'var(--theme-text-subtle)' }}
            >
              Colour theme
            </p>
            <ul className="p-1">
              {THEMES.map((option, index) => {
                const selected = option.id === theme;
                return (
                  <li key={option.id}>
                    <button
                      ref={(el) => {
                        optionRefs.current[index] = el;
                      }}
                      type="button"
                      role="menuitemradio"
                      aria-checked={selected}
                      onKeyDown={(e) => onOptionKeyDown(e, index)}
                      onClick={() => {
                        setTheme(option.id);
                        close(true);
                      }}
                      className="flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm transition-colors hover:bg-accent-soft"
                      style={{ color: 'var(--theme-text)' }}
                    >
                      <span
                        className="h-4 w-4 shrink-0 rounded-full border"
                        style={{
                          backgroundColor: option.swatch,
                          borderColor: 'var(--theme-border-strong)',
                        }}
                        aria-hidden
                      />
                      <span className="flex-1 leading-tight">
                        {option.label}
                        <span
                          className="block text-[11px]"
                          style={{ color: 'var(--theme-text-subtle)' }}
                        >
                          {option.hint}
                        </span>
                      </span>
                      {selected && <Check className="h-4 w-4 text-accent" aria-hidden />}
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
