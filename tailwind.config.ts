import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Official ELSIM Brand Palette
        burgundy: {
          DEFAULT: '#941A1D',
          50: '#fdf2f2',
          100: '#fce4e4',
          200: '#f9cdcd',
          300: '#f4a9a9',
          400: '#ec7676',
          500: '#941A1D',
          600: '#7a1518',
          700: '#651216',
          800: '#551114',
          900: '#4a1215',
          950: '#280709',
        },
        charcoal: {
          DEFAULT: '#171717',
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#171717',
        },
        metal: {
          DEFAULT: '#D1D1D1',
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#D1D1D1',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        engblue: {
          DEFAULT: '#2F80C5',
          50: '#f0f7fc',
          100: '#ddeff9',
          200: '#c3e3f4',
          300: '#9ad0ec',
          400: '#6ab5e0',
          500: '#2F80C5',
          600: '#3a7bb8',
          700: '#316498',
          800: '#2d557d',
          900: '#294868',
          950: '#1b2e44',
        },
        safety: {
          DEFAULT: '#D7E63D',
          50: '#fafce8',
          100: '#f4f8ce',
          200: '#e9f2a0',
          300: '#D7E63D',
          400: '#c5d622',
          500: '#a8b815',
          600: '#82910f',
          700: '#636e10',
          800: '#4f5813',
          900: '#434a15',
          950: '#232808',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'flow': 'flow 3s linear infinite',
      },
      keyframes: {
        flow: {
          '0%': { strokeDashoffset: '100' },
          '100%': { strokeDashoffset: '0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
