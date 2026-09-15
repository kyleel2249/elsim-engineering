'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/Button';

export default function GlobalError({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-start justify-center px-6">
      <span className="font-mono text-xs text-copper-400">FAULT REPORT</span>
      <h1 className="mt-3 font-display text-3xl text-steel-100">Something tripped the circuit.</h1>
      <p className="mt-3 text-sm leading-relaxed text-steel-300">
        This page failed to render. It has been logged. You can try again, or head back to the
        homepage.
      </p>
      <div className="mt-8 flex gap-4">
        <Button onClick={reset}>Try again</Button>
        <Button href="/" variant="outline">
          Back home
        </Button>
      </div>
    </div>
  );
}
