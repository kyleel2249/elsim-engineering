import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'ELSIM Engineering | Electrical Engineering & Energy Solutions – Ghana',
    template: '%s | ELSIM Engineering',
  },
  description:
    'ELSIM Engineering provides electrical installation, solar power, maintenance and consulting services across Ghana and West Africa. Provisional site pending official brand assets.',
  keywords: [
    'electrical engineering Ghana',
    'electrical installation Accra',
    'solar power installation Ghana',
    'electrical maintenance Ghana',
    'power distribution engineering',
  ],
  authors: [{ name: 'ELSIM Engineering' }],
  openGraph: {
    type: 'website',
    locale: 'en_GH',
    url: 'https://elsim-engineering.example.com', // Replace with production domain
    siteName: 'ELSIM Engineering',
    title: 'ELSIM Engineering | Electrical & Energy Solutions',
    description:
      'Reliable electrical engineering, energy and infrastructure solutions for businesses, industries, properties and institutions in Ghana and West Africa.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-energy-500 focus:text-navy-950 focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
