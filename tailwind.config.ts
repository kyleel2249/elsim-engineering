import type { Config } from 'tailwindcss';

/**
 * ELSIM Engineering — unified design tokens.
 *
 * This file intentionally carries BOTH colour families that exist in the
 * codebase so that nothing renders against an undefined utility:
 *
 *  - brand family   : burgundy / charcoal / metal / safety / engblue
 *                     (the ELSIM house palette, #941A1D led)
 *  - technical family: steel / cyan / copper
 *                     (the instrumentation palette used by ui/*, error,
 *                      loading, not-found and the dark shell)
 *
 * Neither family is removed. Runtime theming is layered on top via the
 * `--theme-*` custom properties defined in app/globals.css.
 */
const config: Config = {
  darkMode: ['class', '[data-theme="black"]'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './hooks/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        /* ---------- ELSIM house palette ----------
           Sampled from the master logo: navy #0F3156 with gold #FAB617.
           These are the authoritative brand colours. The burgundy family
           below predates the logo and is retained as a selectable theme. */
        navy: {
          DEFAULT: '#0F3156',
          50: '#F2F6FB',
          100: '#E2EAF4',
          200: '#C2D2E6',
          300: '#93AECF',
          400: '#5C82AE',
          500: '#2A5A94',
          600: '#0F3156',
          700: '#0C2846',
          800: '#091E35',
          900: '#061526',
          950: '#030C16'
        },
        gold: {
          DEFAULT: '#FAB617',
          50: '#FFFBEF',
          100: '#FEF3D2',
          200: '#FDE49C',
          300: '#FCD063',
          400: '#FBC13A',
          500: '#FAB617',
          600: '#D8960B',
          700: '#A9720A',
          800: '#7B530C',
          900: '#553A0B'
        },

        burgundy: {
          DEFAULT: '#941A1D',
          50: '#FDF3F3',
          100: '#FBE3E4',
          200: '#F5C2C4',
          300: '#E89396',
          400: '#D25D61',
          500: '#B23034',
          600: '#941A1D',
          700: '#7A1518',
          800: '#5E1013',
          900: '#420B0D',
          950: '#2A0607'
        },
        charcoal: {
          DEFAULT: '#171717',
          50: '#F6F6F6',
          100: '#E7E7E7',
          200: '#C9C9C9',
          300: '#A3A3A3',
          400: '#767676',
          500: '#4F4F4F',
          600: '#3A3A3A',
          700: '#2A2A2A',
          800: '#1F1F1F',
          900: '#171717',
          950: '#0D0D0D'
        },
        metal: {
          DEFAULT: '#D1D1D1',
          50: '#FAFAFA',
          100: '#F2F2F3',
          200: '#E3E4E6',
          300: '#D1D1D1',
          400: '#B4B6BA',
          500: '#93969C',
          600: '#6F737A',
          700: '#53565C',
          800: '#3A3C41',
          900: '#26282B'
        },
        safety: {
          DEFAULT: '#D7E63D',
          300: '#E8F183',
          400: '#DFEC5C',
          500: '#D7E63D',
          600: '#AEBB24',
          700: '#828C1A'
        },
        engblue: {
          DEFAULT: '#2F80C5',
          300: '#7FB6E2',
          400: '#4E97D4',
          500: '#2F80C5',
          600: '#23649B',
          700: '#1A4B75'
        },

        /* ---------- technical / instrumentation palette ---------- */
        steel: {
          950: '#070B14',
          900: '#0B1220',
          800: '#101A2C',
          700: '#182338',
          600: '#233350',
          500: '#3A4C6E',
          400: '#64748B',
          300: '#94A3B8',
          200: '#C4CEDB',
          100: '#E6EDF5'
        },
        cyan: {
          300: '#67E8F9',
          400: '#22D3EE',
          500: '#0FB8D6',
          600: '#0A93AE'
        },
        copper: {
          300: '#F6C79B',
          400: '#F0A868',
          500: '#E08A3C',
          600: '#B96A24'
        }
      },
      fontFamily: {
        display: ['var(--font-display)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace']
      },
      backgroundImage: {
        blueprint:
          'linear-gradient(rgba(34,211,238,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.06) 1px, transparent 1px)',
        'blueprint-brand':
          'linear-gradient(rgba(148,26,29,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(148,26,29,0.07) 1px, transparent 1px)',
        'brand-sweep':
          'linear-gradient(110deg, #0F3156 0%, #2A5A94 45%, #0F3156 100%)',
        'blueprint-navy':
          'linear-gradient(rgba(15,49,86,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(15,49,86,0.07) 1px, transparent 1px)'
      },
      backgroundSize: {
        grid: '48px 48px',
        'grid-sm': '16px 16px',
        'grid-lg': '96px 96px',
        sweep: '200% 100%'
      },
      boxShadow: {
        panel: '0 1px 0 0 rgba(0,0,0,0.04), 0 12px 32px -20px rgba(23,23,23,0.45)',
        'panel-lg': '0 2px 0 0 rgba(0,0,0,0.04), 0 28px 60px -32px rgba(23,23,23,0.55)',
        'glow-burgundy': '0 0 0 1px rgba(148,26,29,0.35), 0 12px 40px -12px rgba(148,26,29,0.45)',
        'glow-navy': '0 0 0 1px rgba(15,49,86,0.3), 0 12px 40px -12px rgba(15,49,86,0.45)',
        'glow-gold': '0 0 0 1px rgba(250,182,23,0.4), 0 12px 40px -12px rgba(250,182,23,0.5)',
        'glow-cyan': '0 0 0 1px rgba(34,211,238,0.35), 0 12px 40px -12px rgba(34,211,238,0.45)'
      },
      transitionTimingFunction: {
        engineered: 'cubic-bezier(0.22, 1, 0.36, 1)',
        mechanical: 'cubic-bezier(0.65, 0, 0.35, 1)'
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 18s linear infinite',
        'spin-slower': 'spin 36s linear infinite',
        marquee: 'marquee 32s linear infinite',
        'marquee-slow': 'marquee 60s linear infinite',
        'slideshow-progress': 'slideshow-progress 5s linear forwards',
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 0.5s ease-out both',
        'scale-in': 'scale-in 0.35s cubic-bezier(0.22, 1, 0.36, 1) both',
        shimmer: 'shimmer 2.4s linear infinite',
        float: 'float 7s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'current-flow': 'current-flow 3s linear infinite',
        'sweep-x': 'sweep-x 6s ease-in-out infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        'slideshow-progress': {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' }
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%': { transform: 'scale(1.6)', opacity: '0' },
          '100%': { transform: 'scale(1.6)', opacity: '0' }
        },
        'current-flow': {
          '0%': { strokeDashoffset: '48' },
          '100%': { strokeDashoffset: '0' }
        },
        'sweep-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        }
      }
    }
  },
  plugins: []
};

export default config;
