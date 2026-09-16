import type { MetadataRoute } from 'next';
import { siteUrl, isIndexable } from '@/lib/site';

/**
 * Robots policy.
 *
 * Previously a permanent `disallow: /` from the pre-launch period. It is now
 * driven by NEXT_PUBLIC_SITE_INDEXABLE so staging can still be blocked without
 * the production site being invisible to search engines.
 */
export default function robots(): MetadataRoute.Robots {
  if (!isIndexable) {
    return {
      rules: { userAgent: '*', disallow: '/' },
      sitemap: `${siteUrl}/sitemap.xml`,
    };
  }

  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/'] },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
