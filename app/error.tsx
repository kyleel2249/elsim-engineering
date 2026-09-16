'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { RotateCcw } from 'lucide-react';

/**
 * Route-level error boundary.
 *
 * Says what happened and what to do about it, and surfaces the digest so a
 * reported problem can be matched to a server log.
 */
export default function RouteError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      className="flex min-h-[70vh] items-center py-20"
      style={{ backgroundColor: 'var(--theme-bg)' }}
    >
      <div className="mx-auto w-full max-w-xl px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-sm text-accent">Error</p>

        <h1
          className="mt-3 font-display text-3xl font-bold tracking-tight"
          style={{ color: 'var(--theme-text)' }}
        >
          This page failed to load
        </h1>

        <p className="mt-4 leading-relaxed" style={{ color: 'var(--theme-text-muted)' }}>
          Something went wrong rendering this page. The problem has been logged. Retrying often
          clears it; if it does not, the homepage and the contact page are unaffected.
        </p>

        {error.digest && (
          <p className="mt-4 font-mono text-xs" style={{ color: 'var(--theme-text-subtle)' }}>
            Reference {error.digest}
          </p>
        )}

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-2 rounded bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent transition-all hover:brightness-110"
          >
            <RotateCcw className="h-4 w-4" aria-hidden />
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center rounded border px-5 py-2.5 text-sm font-medium transition-colors"
            style={{ borderColor: 'var(--theme-border)', color: 'var(--theme-text)' }}
          >
            Back to the homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
