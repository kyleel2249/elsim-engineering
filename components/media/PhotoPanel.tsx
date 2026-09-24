'use client';

import Image from 'next/image';
import { useState } from 'react';
import { cdnUrl } from '@/lib/cdn';
import { cn } from '@/lib/utils';
import type { MediaAsset } from '@/lib/data/media';

/**
 * Figure panel for the supplied site photography.
 *
 * The source files are small and inconsistently proportioned, so the image is
 * contained (never cropped) inside a fixed-ratio frame with a blurred copy of
 * itself filling the letterbox. Falls back to a labelled brand panel if the
 * file is missing.
 */
export function PhotoPanel({
  asset,
  label,
  ratio = '16 / 9',
  className,
  priority = false,
}: {
  asset: MediaAsset;
  label: string;
  ratio?: string;
  className?: string;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <figure
      className={cn('overflow-hidden rounded border', className)}
      style={{ borderColor: 'var(--theme-border)' }}
    >
      <div className="relative w-full bg-navy-800" style={{ aspectRatio: ratio }}>
        {failed ? (
          <div
            role="img"
            aria-label={asset.alt}
            className="flex h-full w-full flex-col items-center justify-center gap-2 text-center"
          >
            <svg
              viewBox="0 0 48 48"
              className="h-8 w-8 text-burgundy"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden
            >
              <rect x="6" y="10" width="36" height="28" rx="2" />
              <path d="M6 30l10-9 8 7 6-5 12 10" />
              <circle cx="17" cy="19" r="2.5" />
            </svg>
            <span className="text-xs text-navy-200">{label}</span>
          </div>
        ) : (
          <>
            <Image
              src={cdnUrl(asset.src)}
              alt=""
              aria-hidden
              fill
              className="scale-110 object-cover opacity-30 blur-2xl"
              sizes="(max-width: 640px) 100vw, 50vw"
              quality={25}
            />
            <Image
              src={cdnUrl(asset.src)}
              alt={asset.alt}
              fill
              className="object-contain object-center"
              sizes="(max-width: 640px) 100vw, 50vw"
              quality={92}
              priority={priority}
              onError={() => setFailed(true)}
            />
          </>
        )}
      </div>

      <figcaption
        className="border-t px-4 py-3 text-sm font-medium"
        style={{
          color: 'var(--theme-text)',
          borderColor: 'var(--theme-border)',
          backgroundColor: 'var(--theme-surface)',
        }}
      >
        {label}
      </figcaption>
    </figure>
  );
}
