export type ThemeId =
  | 'white'
  | 'black'
  | 'red'
  | 'orange'
  | 'green'
  | 'blue'
  | 'violet';

/**
 * Selectable colour themes.
 *
 * `white` is the house theme: ELSIM's "Technical Premium" identity — Deep
 * Engineering Navy #082B45, Industrial Blue #0B5A82, Electrical Cyan
 * #00A9D6 and Controlled Amber #F5A623 on a Technical Off-White ground.
 */
export interface ThemeOption {
  id: ThemeId;
  label: string;
  /** Swatch colour shown in the switcher */
  swatch: string;
  /** Short description announced to assistive technology */
  hint: string;
}

export const THEMES: ThemeOption[] = [
  { id: 'white', label: 'White', swatch: '#082B45', hint: 'ELSIM navy, cyan and amber on light' },
  { id: 'black', label: 'Black', swatch: '#FAB617', hint: 'Gold on dark, low glare on site' },
  { id: 'blue', label: 'Blue', swatch: '#2A5A94', hint: 'Deeper navy, drawing-office blue' },
  { id: 'red', label: 'Red', swatch: '#941A1D', hint: 'Previous house burgundy' },
  { id: 'orange', label: 'Orange', swatch: '#C24A02', hint: 'High-visibility warmth' },
  { id: 'green', label: 'Green', swatch: '#1F5540', hint: 'Renewables and solar' },
  { id: 'violet', label: 'Violet', swatch: '#5B2C6F', hint: 'Low-contrast alternative' },
];

export const THEME_IDS = THEMES.map((t) => t.id) as ThemeId[];

export const DEFAULT_THEME: ThemeId = 'white';
export const THEME_STORAGE_KEY = 'elsim-theme';

export function isThemeId(value: unknown): value is ThemeId {
  return typeof value === 'string' && (THEME_IDS as string[]).includes(value);
}
