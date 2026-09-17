import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ThemeProvider, themeNoFlashScript } from '@/components/theme/ThemeProvider';
import { PageTransition } from '@/components/motion/PageTransition';
import { BackToTop } from '@/components/motion/BackToTop';
import { fontVariables } from '@/lib/fonts';
import { company } from '@/lib/data/company';
import { media, getRandomSocialImage } from '@/lib/data/media';
import { siteUrl, isIndexable, GA_MEASUREMENT_ID } from '@/lib/site';
import './globals.css';

const siteTitle = 'ELSIM Engineering — Electrical, Energy & Technical Services in Ghana';
const siteDescription =
  'ELSIM Engineering designs, installs, tests and maintains electrical, solar and power-distribution systems for commercial and industrial clients across Ghana and West Africa.';
const ogDescription =
  'Electrical, solar, power-distribution and consulting engineering across Ghana and West Africa.';

/** Random site photo for link previews — chosen once per build (static export). */
const socialImage = getRandomSocialImage();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  manifest: '/manifest.webmanifest',
  applicationName: 'ELSIM Engineering',
  title: {
    default: siteTitle,
    template: '%s · ELSIM Engineering',
  },
  description: siteDescription,
  keywords: [
    'electrical engineering Ghana',
    'solar installation Accra',
    'power distribution West Africa',
    'transformer installation',
    'electrical maintenance Ghana',
    'ELSIM Engineering',
  ],
  authors: [{ name: company.name }],
  creator: company.name,
  publisher: company.name,
  alternates: { canonical: '/' },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: siteTitle,
    description: ogDescription,
    url: siteUrl,
    siteName: company.name,
    locale: 'en_GH',
    type: 'website',
    images: [
      {
        url: socialImage.src,
        width: socialImage.width,
        height: socialImage.height,
        alt: socialImage.alt,
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: ogDescription,
    images: [
      {
        url: socialImage.src,
        width: socialImage.width,
        height: socialImage.height,
        alt: socialImage.alt,
      },
    ],
  },
  formatDetection: { telephone: true, address: true, email: true },
  robots: isIndexable
    ? {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
      }
    : { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light dark',
};

/** Organisation structured data — helps search engines resolve the business. */
const organisationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: company.name,
  description: company.description,
  url: siteUrl,
  logo: `${siteUrl}${media.logo.src}`,
  image: `${siteUrl}${socialImage.src}`,
  telephone: company.phones.map((p) => p.display),
  slogan: company.tagline,
  address: {
    '@type': 'PostalAddress',
    streetAddress: company.address.line1,
    addressLocality: company.address.city,
    addressCountry: 'GH',
  },
  areaServed: company.regions.map((name) => ({ '@type': 'Country', name })),
  sameAs: [
    company.socials.linkedin,
    company.socials.facebook,
    company.socials.tiktok,
  ],
  knowsAbout: [
    'Electrical installations',
    'Solar photovoltaic systems',
    'Power distribution and transformers',
    'Electrical inspection and maintenance',
    'Electrical consulting and audits',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GH" className={fontVariables} suppressHydrationWarning>
      <head>
        {/* Applies the stored theme before first paint so the page never flashes. */}
        <script
          dangerouslySetInnerHTML={{ __html: themeNoFlashScript }}
          suppressHydrationWarning
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationJsonLd) }}
        />
      </head>
      <body className="min-h-screen font-body antialiased">
        <ThemeProvider>
          <Header />
          <main id="main-content">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <BackToTop />
        </ThemeProvider>

        {/* Google Analytics — property G-E8Z0XCC54Q. Loads after hydration so it
            never blocks first paint, and is skipped entirely when unset. */}
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', { anonymize_ip: true });
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
