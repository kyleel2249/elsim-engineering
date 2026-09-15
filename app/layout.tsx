import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700']
});

const body = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600']
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500']
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  manifest: '/manifest.json',
  title: {
    default: 'ELSIM Engineering — Electrical, Structural & Mechanical Services',
    template: '%s · ELSIM Engineering'
  },
  description:
    'ELSIM Engineering delivers electrical, structural, mechanical and power-systems services for commercial and industrial clients in Ghana.',
  openGraph: {
    title: 'ELSIM Engineering',
    description:
      'Electrical, structural, mechanical and power-systems engineering services in Ghana.',
    url: siteUrl,
    siteName: 'ELSIM Engineering',
    locale: 'en_GH',
    type: 'website'
  },
  robots: {
    index: false,
    follow: false
  }
};

export const viewport: Viewport = {
  themeColor: '#070B14'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="min-h-screen bg-steel-950 font-body text-steel-100 antialiased">
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
