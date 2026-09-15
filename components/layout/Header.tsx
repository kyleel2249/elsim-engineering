'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import { ElsimLogo } from '@/components/brand/ElsimLogo';

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
        'sticky top-0 z-40 w-full transition-all duration-300 border-b',
        scrolled ? 'shadow-sm' : ''
      )}
      style={{
        backgroundColor: 'var(--theme-header-bg)',
        borderColor: 'var(--theme-border)',
        color: 'var(--theme-text)',
        backdropFilter: 'blur(12px)',
      }}
    >
      {/* Left padding so logo clears the theme switcher */}
      <div className="mx-auto max-w-7xl pl-14 pr-4 sm:pl-16 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link
            href="/"
            className="flex items-center group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy rounded"
            aria-label="ELSIM Engineering Home"
          >
            <ElsimLogo size="md" withWordmark priority animated={false} />
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  'px-3 py-2 text-sm font-medium transition-colors relative',
                  pathname === item.href
                    ? 'text-burgundy'
                    : 'hover:text-burgundy'
                )}
                style={pathname === item.href ? undefined : { color: 'var(--theme-text-muted)' }}
              >
                {item.label}
                {pathname === item.href && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-burgundy" aria-hidden="true" />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/quotation"
              className="hidden sm:inline-flex items-center justify-center rounded bg-burgundy px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-burgundy-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy transition-colors"
            >
              Request Consultation
            </Link>

            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center rounded p-2 hover:bg-[var(--theme-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
              style={{ color: 'var(--theme-text-muted)' }}
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

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t"
            style={{
              borderColor: 'var(--theme-border)',
              backgroundColor: 'var(--theme-surface)',
            }}
          >
            <nav className="space-y-1 px-4 py-4" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    'block rounded px-3 py-2.5 text-base font-medium',
                    pathname === item.href
                      ? 'bg-burgundy/10 text-burgundy'
                      : 'hover:bg-[var(--theme-hover)]'
                  )}
                  style={pathname === item.href ? undefined : { color: 'var(--theme-text)' }}
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
