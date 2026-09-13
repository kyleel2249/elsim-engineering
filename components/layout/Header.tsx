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
          ? 'bg-navy-950/95 backdrop-blur-md border-b border-steel-800 shadow-lg'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" aria-label="ELSIM Engineering Home">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-energy-500/10 border border-energy-500/30 group-hover:bg-energy-500/20 transition-colors">
              <span className="font-display text-lg font-bold text-energy-400">E</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-display text-lg font-semibold tracking-tight text-white">
                ELSIM
              </span>
              <span className="block text-xs text-steel-400 -mt-0.5">Engineering</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  'px-3 py-2 text-sm font-medium rounded-md transition-colors',
                  pathname === item.href
                    ? 'text-energy-400 bg-energy-500/10'
                    : 'text-steel-300 hover:text-white hover:bg-steel-800/50'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/quotation"
              className="hidden sm:inline-flex items-center justify-center rounded-md bg-energy-500 px-4 py-2 text-sm font-semibold text-navy-950 shadow-sm hover:bg-energy-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-energy-500 transition-colors"
            >
              Request Quotation
            </Link>

            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-steel-300 hover:bg-steel-800 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-energy-500"
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
            className="lg:hidden border-t border-steel-800 bg-navy-950"
          >
            <nav className="space-y-1 px-4 py-4" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    'block rounded-md px-3 py-2.5 text-base font-medium',
                    pathname === item.href
                      ? 'bg-energy-500/10 text-energy-400'
                      : 'text-steel-300 hover:bg-steel-800 hover:text-white'
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/quotation"
                className="mt-3 block w-full rounded-md bg-energy-500 px-3 py-2.5 text-center text-base font-semibold text-navy-950"
              >
                Request Quotation
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
