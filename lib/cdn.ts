/**
 * Image CDN performance helper for ELSIM Engineering
 *
 * Set NEXT_PUBLIC_IMAGE_CDN_URL for Cloudinary / Imgix / Cloudflare Images.
 * Without it, Next.js Image Optimization serves AVIF/WebP at the edge.
 *
 * Performance practices applied:
 * - Long cache TTL (configured in next.config.js)
 * - Auto format + quality in CDN query string
 * - Width-aware transforms to avoid oversize downloads
 * - Optional DPR hint for retina
 */

const CDN_BASE = process.env.NEXT_PUBLIC_IMAGE_CDN_URL?.replace(/\/$/, '') || '';
const CDN_PROVIDER = (process.env.NEXT_PUBLIC_IMAGE_CDN_PROVIDER || 'generic').toLowerCase();

export function cdnUrl(path: string): string {
  if (!path) return path;
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (!CDN_BASE) return normalized;
  return `${CDN_BASE}${normalized}`;
}

/**
 * Build a performance-oriented CDN URL for a given display width.
 * Call from custom loaders or when generating src manually.
 */
export function cdnOptimizedUrl(
  path: string,
  options: { width?: number; quality?: number; dpr?: number } = {}
): string {
  const { width = 1200, quality = 80, dpr = 1 } = options;
  const base = cdnUrl(path);
  if (!CDN_BASE) return base;

  if (CDN_PROVIDER === 'cloudinary') {
    // Insert transforms after /upload/
    // e.g. .../upload/f_auto,q_80,w_1200,dpr_auto/...
    const marker = '/upload/';
    const idx = base.indexOf(marker);
    if (idx !== -1) {
      const head = base.slice(0, idx + marker.length);
      const tail = base.slice(idx + marker.length).replace(/^\//, '');
      const t = `f_auto,q_${quality},w_${width},dpr_${dpr},c_limit`;
      return `${head}${t}/${tail}`;
    }
  }

  if (CDN_PROVIDER === 'imgix') {
    const sep = base.includes('?') ? '&' : '?';
    return `${base}${sep}auto=format,compress&w=${width}&q=${quality}&dpr=${dpr}`;
  }

  // Generic / Cloudflare-style query params
  const sep = base.includes('?') ? '&' : '?';
  return `${base}${sep}w=${width}&q=${quality}&dpr=${dpr}&auto=format`;
}

export function cdnImageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  const q = quality ?? 80;
  if (!CDN_BASE) {
    return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${q}`;
  }
  return cdnOptimizedUrl(src, { width, quality: q, dpr: 1 });
}

export const hasExternalCdn = Boolean(CDN_BASE);
