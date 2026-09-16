'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import {
  DEFAULT_THEME,
  THEME_IDS,
  THEME_STORAGE_KEY,
  isThemeId,
  type ThemeId,
} from '@/lib/theme';

interface ThemeContextValue {
  theme: ThemeId;
  setTheme: (id: ThemeId) => void;
  cycleTheme: () => void;
  /** False until the stored preference has been read on the client. */
  ready: boolean;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

function applyTheme(id: ThemeId) {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  root.setAttribute('data-theme', id);

  // Keep the browser UI (address bar, form controls) in step with the theme.
  const meta = document.querySelector('meta[name="theme-color"]');
  const bg = getComputedStyle(root).getPropertyValue('--theme-bg').trim();
  if (meta && bg) meta.setAttribute('content', bg);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>(DEFAULT_THEME);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let initial = DEFAULT_THEME;
    try {
      const stored = localStorage.getItem(THEME_STORAGE_KEY);
      if (isThemeId(stored)) {
        initial = stored;
      } else if (
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        // No stored choice: honour the OS preference on first visit.
        initial = 'black';
      }
    } catch {
      /* storage unavailable (private mode, blocked cookies) — use the default */
    }

    setThemeState(initial);
    applyTheme(initial);
    setReady(true);
  }, []);

  // Sync the theme across tabs of the same site.
  useEffect(() => {
    function onStorage(event: StorageEvent) {
      if (event.key !== THEME_STORAGE_KEY) return;
      if (isThemeId(event.newValue)) {
        setThemeState(event.newValue);
        applyTheme(event.newValue);
      }
    }
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const setTheme = useCallback((id: ThemeId) => {
    setThemeState(id);
    applyTheme(id);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, id);
    } catch {
      /* non-fatal: the theme still applies for this session */
    }
  }, []);

  const cycleTheme = useCallback(() => {
    setThemeState((current) => {
      const next = THEME_IDS[(THEME_IDS.indexOf(current) + 1) % THEME_IDS.length];
      applyTheme(next);
      try {
        localStorage.setItem(THEME_STORAGE_KEY, next);
      } catch {
        /* non-fatal */
      }
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({ theme, setTheme, cycleTheme, ready }),
    [theme, setTheme, cycleTheme, ready]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return ctx;
}

/**
 * Inline script injected before paint so the stored theme is applied on the
 * very first frame. Without this the page flashes the default theme on load.
 */
export const themeNoFlashScript = `
(function(){
  try {
    var ids = ${JSON.stringify(THEME_IDS)};
    var stored = localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});
    var theme = ids.indexOf(stored) !== -1
      ? stored
      : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'black' : ${JSON.stringify(
        DEFAULT_THEME
      )});
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', ${JSON.stringify(DEFAULT_THEME)});
  }
})();
`;
