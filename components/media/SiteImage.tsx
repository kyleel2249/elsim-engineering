'use client';

import Image, { type ImageProps } from 'next/image';
import { useState } from 'react';
import { cdnUrl } from '@/lib/cdn';
import { cn } from '@/lib/utils';

type SiteImageProps = Omit<ImageProps, 'src' | 'onError' | 'onLoad'> & {
  src: string;
  /** Caption shown in the fallback panel when the file cannot be loaded. */
  fallbackLabel?: string;
  /** Skeleton shimmer while the bytes arrive. Defaults to true. */
  showSkeleton?: boolean;
};

/**
 * Image wrapper used across the site.
 *
 * Two jobs beyond next/image:
 *  1. Routes the path through the optional image CDN (NEXT_PUBLIC_IMAGE_CDN_URL).
 *  2. Degrades to a labelled brand panel instead of a broken-image icon if the
 *     file is missing — which matters while approved site photography is still
 *     being swapped in over the placeholder assets.
 */
export function SiteImage({
  src,
  alt,
  className,
  fallbackLabel,
  showSkeleton = true,
  ...rest
}: SiteImageProps) {
  const [state, setState] = useState<'loading' | 'ready' | 'failed'>('loading');

  if (state === 'failed') {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          'flex min-h-[180px] w-full flex-col items-center justify-center gap-2 border p-6 text-center',
          className
        )}
        style={{
          backgroundColor: 'var(--theme-bg-muted)',
          borderColor: 'var(--theme-border)',
        }}
      >
        <svg
          viewBox="0 0 48 48"
          className="h-8 w-8 text-accent"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden
        >
          <rect x="6" y="10" width="36" height="28" rx="2" />
          <path d="M6 30l10-9 8 7 6-5 12 10" />
          <circle cx="17" cy="19" r="2.5" />
        </svg>
        <span className="text-xs font-medium" style={{ color: 'var(--theme-text-muted)' }}>
          {fallbackLabel ?? 'Image unavailable'}
        </span>
      </div>
    );
  }

  return (
    <>
      {showSkeleton && state === 'loading' && (
        <span
          className="skeleton absolute inset-0 block"
          aria-hidden
          data-testid="site-image-skeleton"
        />
      )}
      <Image
        {...rest}
        src={cdnUrl(src)}
        alt={alt}
        className={cn(
          className,
          'transition-opacity duration-500',
          state === 'ready' ? 'opacity-100' : 'opacity-0'
        )}
        onLoad={() => setState('ready')}
        onError={() => setState('failed')}
      />
    </>
  );
}
