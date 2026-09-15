export type ThemeId =
  | 'white'
  | 'black'
  | 'red'
  | 'orange'
  | 'green'
  | 'blue'
  | 'violet';

export interface ThemeOption {
  id: ThemeId;
  label: string;
  /** Swatch colour shown in the switcher */
  swatch: string;
}

export const THEMES: ThemeOption[] = [
  { id: 'white', label: 'White', swatch: '#FFFFFF' },
  { id: 'black', label: 'Black', swatch: '#0A0A0A' },
  { id: 'red', label: 'Red', swatch: '#941A1D' },
  { id: 'orange', label: 'Orange', swatch: '#E85D04' },
  { id: 'green', label: 'Green', swatch: '#2D6A4F' },
  { id: 'blue', label: 'Blue', swatch: '#1D4E89' },
  { id: 'violet', label: 'Violet', swatch: '#5B2C6F' },
];

export const DEFAULT_THEME: ThemeId = 'white';
export const THEME_STORAGE_KEY = 'elsim-theme';
