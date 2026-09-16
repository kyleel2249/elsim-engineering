/**
 * Single source of truth for environment-driven site configuration.
 * Imported by layout, robots, sitemap and the quotation API.
 */

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://elsimengineering.com'
).replace(/\/$/, '');

/**
 * Search-engine indexing.
 *
 * The site previously shipped with a hard `disallow: /` and `noindex` while it
 * was pre-launch. That is now a switch rather than a fact: set
 * NEXT_PUBLIC_SITE_INDEXABLE=false to put the block back during staging.
 */
export const isIndexable = process.env.NEXT_PUBLIC_SITE_INDEXABLE !== 'false';

/** Google Analytics measurement ID. Empty string disables analytics entirely. */
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? 'G-E8Z0XCC54Q';

/**
 * True when the build targets a fully static export (Cloudflare Pages).
 * Route handlers do not exist in that output, so client code uses this to
 * choose a non-API submission path.
 */
export const isStaticExport = process.env.NEXT_PUBLIC_STATIC_EXPORT === '1';

/** Where quotation submissions are emailed. Unset in the public repo. */
export const quotationInbox = process.env.QUOTATION_INBOX ?? '';
