'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/industries', label: 'Industries' },
  { href: '/safety', label: 'Safety & Quality' },
  { href: '/maintenance', label: 'Maintenance' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={clsx(
        'sticky top-0 z-40 w-full transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-metal-300 shadow-sm'
          : 'bg-white/80 backdrop-blur-sm'
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo – preserve official mark when available; temporary lettermark */}
          <Link href="/" className="flex items-center gap-2.5 group" aria-label="ELSIM Engineering Home">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-burgundy text-white group-hover:bg-burgundy-600 transition-colors">
              <span className="font-display text-lg font-bold tracking-tight">E</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-display text-lg font-semibold tracking-tight text-charcoal">
                ELSIM
              </span>
              <span className="block text-[11px] uppercase tracking-widest text-charcoal-500 -mt-0.5">
                Engineering
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  'px-3 py-2 text-sm font-medium transition-colors relative',
                  pathname === item.href
                    ? 'text-burgundy'
                    : 'text-charcoal-600 hover:text-burgundy'
                )}
              >
                {item.label}
                {pathname === item.href && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-burgundy" aria-hidden="true" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/quotation"
              className="hidden sm:inline-flex items-center justify-center rounded bg-burgundy px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-burgundy-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy transition-colors"
            >
              Request Consultation
            </Link>

            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center rounded p-2 text-charcoal-600 hover:bg-metal-100 hover:text-burgundy focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              <span className="sr-only">{mobileOpen ? 'Close menu' : 'Open menu'}</span>
              {mobileOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-metal-300 bg-white"
          >
            <nav className="space-y-1 px-4 py-4" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    'block rounded px-3 py-2.5 text-base font-medium',
                    pathname === item.href
                      ? 'bg-burgundy/5 text-burgundy'
                      : 'text-charcoal-700 hover:bg-metal-100 hover:text-burgundy'
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/quotation"
                className="mt-3 block w-full rounded bg-burgundy px-3 py-2.5 text-center text-base font-semibold text-white"
              >
                Request Consultation
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
