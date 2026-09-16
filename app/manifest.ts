import type { MetadataRoute } from 'next';
import { company } from '@/lib/data/company';

/** Web app manifest — layout.tsx already referenced one; this supplies it. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ELSIM Engineering',
    short_name: 'ELSIM',
    description: company.description,
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#941A1D',
    orientation: 'portrait-primary',
    categories: ['business', 'utilities'],
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
      { src: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  };
}
