import { Manrope, Inter, IBM_Plex_Mono } from 'next/font/google';

/**
 * Typeface loading for the ELSIM site — "Technical Premium" design system.
 *
 * Primary: Manrope (display/headings, 600–800 weight).
 * Secondary: Inter (body copy, 400–500 weight).
 * Mono: IBM Plex Mono, retained for technical/numeric readouts (stat
 * counters, error codes, command palette shortcuts).
 *
 * `next/font/google` fetches the font CSS at build time, which means a Google
 * Fonts outage — or an air-gapped/offline CI runner — fails the whole build.
 * Setting OFFLINE_FONTS=1 swaps this module for lib/fonts.offline.ts via the
 * webpack alias in next.config.js, so the build still completes on a system
 * font stack. See docs/CLOUDFLARE.md.
 */

export const display = Manrope({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['600', '700', '800'],
  display: 'swap',
  fallback: ['ui-sans-serif', 'system-ui', 'Segoe UI', 'Arial', 'sans-serif'],
  adjustFontFallback: true,
});

export const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
  display: 'swap',
  fallback: ['ui-sans-serif', 'system-ui', 'Segoe UI', 'Arial', 'sans-serif'],
  adjustFontFallback: true,
});

export const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
  display: 'swap',
  fallback: ['ui-monospace', 'SFMono-Regular', 'Consolas', 'monospace'],
  adjustFontFallback: true,
});

export const fontVariables = `${display.variable} ${body.variable} ${mono.variable}`;
