/**
 * Image CDN helper for ELSIM Engineering
 *
 * When NEXT_PUBLIC_IMAGE_CDN_URL is set (e.g. Cloudinary, Imgix, Cloudflare Images),
 * asset paths are rewritten through the CDN. Otherwise local /assets paths are used
 * and Next.js Image Optimization acts as the edge image pipeline on deploy (Vercel).
 *
 * Example:
 *   NEXT_PUBLIC_IMAGE_CDN_URL=https://res.cloudinary.com/your-cloud/image/upload
 */

const CDN_BASE = process.env.NEXT_PUBLIC_IMAGE_CDN_URL?.replace(/\/$/, '') || '';

/** Resolve a public asset path through the optional CDN */
export function cdnUrl(path: string): string {
  if (!path) return path;
  // Already absolute remote URL
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (!CDN_BASE) return normalized;
  // Strip leading slash for CDN path join
  return `${CDN_BASE}${normalized}`;
}

/** Next.js custom loader — used when CDN is configured */
export function cdnImageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  const q = quality || 85;
  if (!CDN_BASE) {
    // Default Next optimizer
    return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${q}`;
  }
  // Generic CDN query params (Cloudinary-style transforms can be customized)
  const base = cdnUrl(src);
  const sep = base.includes('?') ? '&' : '?';
  return `${base}${sep}w=${width}&q=${q}&auto=format`;
}

export const hasExternalCdn = Boolean(CDN_BASE);
