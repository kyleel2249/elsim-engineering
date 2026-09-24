import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
};

const SUGGESTIONS = [
  { href: '/services', label: 'Services', hint: 'What our teams deliver' },
  { href: '/projects', label: 'Projects', hint: 'Work across West Africa' },
  { href: '/quotation', label: 'Request a quote', hint: 'Start a project enquiry' },
  { href: '/contact', label: 'Contact', hint: 'Reach the Accra office' },
];

export default function NotFound() {
  return (
    <div
      className="flex min-h-[70vh] items-center py-20"
      style={{ backgroundColor: 'var(--theme-bg)' }}
    >
      <div className="mx-auto w-full max-w-2xl px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-sm text-accent">404</p>

        <h1
          className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl"
          style={{ color: 'var(--theme-text)' }}
        >
          This page isn&rsquo;t in the set
        </h1>

        <p className="mt-4 leading-relaxed" style={{ color: 'var(--theme-text-muted)' }}>
          The address doesn&rsquo;t match anything we publish. It may have moved, or the link that
          brought you here may be out of date. Here is where most people are heading:
        </p>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {SUGGESTIONS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="lift block rounded border p-4"
                style={{
                  borderColor: 'var(--theme-border)',
                  backgroundColor: 'var(--theme-surface)',
                }}
              >
                <span className="font-medium" style={{ color: 'var(--theme-text)' }}>
                  {item.label}
                </span>
                <span className="mt-0.5 block text-sm" style={{ color: 'var(--theme-text-muted)' }}>
                  {item.hint}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/"
          className="mt-8 inline-flex items-center rounded bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent transition-all hover:brightness-110"
        >
          Back to the homepage
        </Link>
      </div>
    </div>
  );
}
