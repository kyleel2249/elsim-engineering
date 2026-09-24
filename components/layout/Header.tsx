'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ElsimLogo } from '@/components/brand/ElsimLogo';
import { CommandPalette } from '@/components/search/CommandPalette';
import { ScrollProgress } from '@/components/motion/ScrollProgress';

const NAV = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/safety', label: 'Safety' },
  { href: '/our-impact', label: 'Our Impact' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Condense the header once the page has been scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock background scroll while the mobile sheet is open.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur transition-[padding,background-color] duration-300"
      style={{
        borderColor: 'var(--theme-border)',
        backgroundColor: 'color-mix(in srgb, var(--theme-bg) 88%, transparent)',
      }}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-on-accent"
      >
        Skip to content
      </a>

      <div
        className={cn(
          'mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 transition-all duration-300 sm:px-6 lg:px-8',
          scrolled ? 'py-3' : 'py-5'
        )}
      >
        <Link href="/" className="flex shrink-0 items-center" aria-label="ELSIM Engineering Firm, home">
          <ElsimLogo size={scrolled ? 'lg' : 'xl'} withWordmark priority />
        </Link>

        <nav className="hidden items-center gap-7 xl:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              data-active={isActive(item.href)}
              className="link-underline text-sm transition-colors"
              style={{
                color: isActive(item.href) ? 'var(--theme-accent)' : 'var(--theme-text-muted)',
              }}
              aria-current={isActive(item.href) ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <CommandPalette />

          <Link
            href="/quotation"
            className="group hidden h-11 items-center gap-1.5 whitespace-nowrap rounded bg-energy px-5 text-xs font-bold uppercase tracking-wide text-on-energy transition-all hover:brightness-105 sm:inline-flex"
          >
            Get in Touch
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>

          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded border xl:hidden"
            style={{
              borderColor: 'var(--theme-border)',
              backgroundColor: 'var(--theme-surface)',
              color: 'var(--theme-text)',
            }}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t xl:hidden"
            style={{ borderColor: 'var(--theme-border)', backgroundColor: 'var(--theme-bg)' }}
          >
            <div className="flex flex-col gap-1 px-4 py-4 sm:px-6">
              {NAV.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.03 * i, duration: 0.2 }}
                >
                  <Link
                    href={item.href}
                    className="block rounded px-3 py-2.5 text-base transition-colors"
                    style={{
                      color: isActive(item.href) ? 'var(--theme-accent)' : 'var(--theme-text)',
                      backgroundColor: isActive(item.href)
                        ? 'var(--theme-accent-soft)'
                        : 'transparent',
                    }}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/quotation"
                className="mt-3 inline-flex h-11 items-center justify-center gap-1.5 rounded bg-energy px-4 text-sm font-bold uppercase tracking-wide text-on-energy"
              >
                Get in Touch
                <span>→</span>
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <ScrollProgress />
    </header>
  );
}
