import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import { ThemeSwitcher } from '@/components/theme/ThemeSwitcher';

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

const GA_MEASUREMENT_ID = 'G-E8Z0XCC54Q';

export const metadata: Metadata = {
  title: {
    default: 'ELSIM Engineering | Electrical Engineering & Energy Solutions – Ghana & West Africa',
    template: '%s | ELSIM Engineering',
  },
  description:
    'ELSIM Engineering delivers electrical installation, solar power, power distribution, maintenance and consulting solutions across Ghana and West Africa. Engineering precision. Industrial strength. Safe execution.',
  keywords: [
    'electrical engineering Ghana',
    'electrical installation Accra',
    'electrical contractors Accra',
    'solar installation Ghana',
    'power distribution Ghana',
    'transformer installation Ghana',
    'industrial electrical installation',
    'electrical maintenance Ghana',
    'CCTV installation Ghana',
    'electric fence installation Ghana',
    'engineering services West Africa',
  ],
  authors: [{ name: 'ELSIM Engineering' }],
  icons: {
    icon: [{ url: '/assets/elsim/logo.png', type: 'image/png' }],
    apple: [{ url: '/assets/elsim/logo.png' }],
    shortcut: '/assets/elsim/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GH',
    url: 'https://elsim-engineering.example.com',
    siteName: 'ELSIM Engineering',
    title: 'ELSIM Engineering | Engineering Precision. Industrial Strength. Safe Execution.',
    description:
      'Electrical, energy, industrial and technical solutions designed around safety, reliability and professional execution across Ghana and West Africa.',
    images: [{ url: '/assets/elsim/logo.png', width: 512, height: 512, alt: 'ELSIM Engineering Firm logo' }],
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
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} data-theme="white" suppressHydrationWarning>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        {/* Prevent theme flash before React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('elsim-theme');if(t&&['white','black','red','orange','green','blue','violet'].indexOf(t)!==-1){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-20 focus:z-50 focus:bg-burgundy focus:text-white focus:px-4 focus:py-2 focus:rounded"
          >
            Skip to main content
          </a>
          <ThemeSwitcher />
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
