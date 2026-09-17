import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/layout/PageHeader';
import { Reveal } from '@/components/motion/Reveal';
import { getPublishedPosts } from '@/lib/data/blog';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Notes from ELSIM Engineering on electrical installations, power distribution, solar, safety and maintenance across Ghana and West Africa.',
  alternates: { canonical: '/blog' },
};

export default function BlogPage() {
  const posts = getPublishedPosts();

  return (
    <div className="py-16 sm:py-24" style={{ backgroundColor: 'var(--theme-bg)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PageHeader
          eyebrow="Insights"
          title="Blog"
          lede="Practical notes on electrical and energy engineering — from transformer planning and live-site safety to solar and planned maintenance."
        />

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 60} as="li">
              <article
                className="lift flex h-full flex-col rounded border p-6"
                style={{
                  borderColor: 'var(--theme-border)',
                  backgroundColor: 'var(--theme-surface)',
                }}
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                  <span className="font-semibold uppercase tracking-wider text-accent">
                    {post.category}
                  </span>
                  <time
                    dateTime={post.publishedAt}
                    style={{ color: 'var(--theme-text-subtle)' }}
                  >
                    {formatDate(post.publishedAt)}
                  </time>
                </div>
                <h2
                  className="mt-3 font-display text-xl font-semibold tracking-tight"
                  style={{ color: 'var(--theme-text)' }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="transition-colors hover:text-accent"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p
                  className="mt-3 flex-1 text-sm leading-relaxed"
                  style={{ color: 'var(--theme-text-muted)' }}
                >
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="link-underline mt-5 inline-block text-sm font-semibold text-accent"
                >
                  Read article
                </Link>
              </article>
            </Reveal>
          ))}
        </ul>

        {posts.length === 0 && (
          <p className="mt-12 text-sm" style={{ color: 'var(--theme-text-muted)' }}>
            New articles will appear here as they are published.
          </p>
        )}

        <div
          className="mt-16 rounded border p-6 text-center sm:p-8"
          style={{ borderColor: 'var(--theme-border)', backgroundColor: 'var(--theme-bg-muted)' }}
        >
          <h2 className="font-display text-xl font-semibold" style={{ color: 'var(--theme-text)' }}>
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm" style={{ color: 'var(--theme-text-muted)' }}>
            Tell us the location, the load and your timeline. We will come back with an approach.
          </p>
          <Link
            href="/quotation"
            className="mt-6 inline-flex items-center rounded bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent transition-all hover:brightness-110"
          >
            Request a consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
