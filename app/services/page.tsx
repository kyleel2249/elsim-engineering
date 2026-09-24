import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/layout/PageHeader';
import { Reveal } from '@/components/motion/Reveal';
import { services } from '@/lib/data/services';
import { media } from '@/lib/data/media';
import { pageOpenGraph } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Electrical installations, solar power, inspection and maintenance, power distribution and consulting from ELSIM Engineering in Ghana and West Africa.',
  ...pageOpenGraph({
    title: 'Services — ELSIM Engineering',
    description:
      'Electrical installations, solar power, inspection and maintenance, power distribution and consulting across Ghana and West Africa.',
    path: '/services',
    image: media.work.panelWiringTeam,
  }),
};

export default function ServicesPage() {
  return (
    <div className="py-16 sm:py-24" style={{ backgroundColor: 'var(--theme-bg)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PageHeader
          eyebrow="Capabilities"
          title="What our teams deliver"
          lede="Electrical engineering and energy solutions for commercial, industrial and institutional clients — designed, installed, tested and maintained by the same firm."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 70}>
              <Link
                href={`/services/${service.slug}`}
                className="lift group flex h-full flex-col rounded border p-6"
                style={{
                  borderColor: 'var(--theme-border)',
                  backgroundColor: 'var(--theme-surface)',
                }}
              >
                <span
                  className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded"
                  style={{ backgroundColor: 'var(--theme-accent-soft)' }}
                  aria-hidden
                >
                  <ServiceGlyph icon={service.icon} />
                </span>

                <h2
                  className="font-display text-lg font-semibold transition-colors group-hover:text-accent"
                  style={{ color: 'var(--theme-text)' }}
                >
                  {service.title}
                </h2>

                <p
                  className="mt-3 flex-1 text-sm leading-relaxed"
                  style={{ color: 'var(--theme-text-muted)' }}
                >
                  {service.shortDescription}
                </p>

                <span className="mt-5 text-sm font-medium text-accent">
                  {service.features.length} capabilities
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Small line glyph per service. Decorative — labelled by the heading beside it. */
function ServiceGlyph({ icon }: { icon: string }) {
  const common = {
    className: 'h-5 w-5 text-accent',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.75,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    viewBox: '0 0 24 24',
  };

  switch (icon) {
    case 'sun':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" />
        </svg>
      );
    case 'tool':
      return (
        <svg {...common}>
          <path d="M14.7 6.3a4 4 0 0 0 5 5L21 20l-1 1-8.7-8.7a4 4 0 0 0-5-5L9 5 5 9 3.4 7.4" />
        </svg>
      );
    case 'transformer':
      return (
        <svg {...common}>
          <rect x="4" y="7" width="16" height="10" rx="1.5" />
          <path d="M8 7V4M16 7V4M8 17v3M16 17v3M4 11h16M4 14h16" />
        </svg>
      );
    case 'clipboard':
      return (
        <svg {...common}>
          <rect x="5" y="4" width="14" height="17" rx="2" />
          <path d="M9 4V3h6v1M9 10h6M9 14h6M9 18h3" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M4 7h4l3 4h6M4 17h4l3-4" />
          <circle cx="4" cy="7" r="1.5" />
          <circle cx="4" cy="17" r="1.5" />
          <path d="M17 8l3 3-3 3" />
        </svg>
      );
  }
}
