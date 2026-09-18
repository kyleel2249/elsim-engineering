import { siteUrl } from '@/lib/site';

interface OgImageInput {
  src: string;
  width: number;
  height: number;
  alt: string;
}

interface PageOpenGraphOptions {
  title: string;
  description: string;
  /** Path from the site root, e.g. '/about'. */
  path: string;
  image?: OgImageInput;
  type?: 'website' | 'article';
}

/**
 * Build matching `openGraph` and `twitter` metadata blocks for a page.
 *
 * Next.js's Metadata API does NOT propagate a page's top-level `title` /
 * `description` into `openGraph`/`twitter` automatically, and if a page
 * defines its own `openGraph` object at all, it fully replaces the root
 * layout's — including `images`. A page that sets `openGraph.title` without
 * `openGraph.images` therefore renders with NO preview image when shared,
 * not the site's default image. Every page that defines its own `openGraph`
 * must spread this helper's result so link previews on WhatsApp, iMessage,
 * Twitter/X, LinkedIn, Slack, etc. are actually complete.
 */
export function pageOpenGraph({
  title,
  description,
  path,
  image,
  type = 'website',
}: PageOpenGraphOptions) {
  const url = `${siteUrl}${path}`;
  const images = image
    ? [
        {
          url: `${siteUrl}${image.src}`,
          width: image.width,
          height: image.height,
          alt: image.alt,
          type: 'image/jpeg' as const,
        },
      ]
    : undefined;

  return {
    openGraph: {
      title,
      description,
      url,
      siteName: 'ELSIM Engineering',
      locale: 'en_GH',
      type,
      ...(images ? { images } : {}),
    },
    twitter: {
      card: 'summary_large_image' as const,
      title,
      description,
      ...(images ? { images } : {}),
    },
  };
}
