import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/layout/PageHeader';
import { Reveal } from '@/components/motion/Reveal';
import { SiteImage } from '@/components/media/SiteImage';
import { WorkGallery } from '@/components/media/WorkGallery';
import { StatCounter } from '@/components/motion/StatCounter';
import { company } from '@/lib/data/company';
import { media, workPhotos } from '@/lib/data/media';
import { getPublishedProjects } from '@/lib/data/projects';
import { services } from '@/lib/data/services';

export const metadata: Metadata = {
  title: 'About ELSIM Engineering',
  description:
    'ELSIM Engineering — vision, mission, values and leadership. Electrical engineering solutions across Ghana and West Africa.',
};

export default function AboutPage() {
  const projectCount = getPublishedProjects().length;

  return (
    <div className="py-16 sm:py-24" style={{ backgroundColor: 'var(--theme-bg)' }}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <PageHeader eyebrow="Company" title="About ELSIM Engineering" />

        <div className="mt-8 space-y-5 leading-relaxed" style={{ color: 'var(--theme-text-muted)' }}>
          <p className="text-lg">{company.description}</p>
          <p>
            We operate from Accra, Ghana, with delivered project experience in{' '}
            {company.regions.slice(0, -1).join(', ')} and {company.regions.slice(-1)}.
          </p>
        </div>

        <Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <StatCounter value={projectCount} label="Projects on record" />
            <StatCounter value={company.regions.length} label="Countries delivered in" />
            <StatCounter value={services.length} label="Service lines" />
          </div>
        </Reveal>

        <Reveal>
          <figure
            className="relative mt-14 overflow-hidden rounded border"
            style={{ borderColor: 'var(--theme-border)', backgroundColor: 'var(--theme-bg-muted)' }}
          >
            <div
              className="relative flex items-center justify-center p-2 sm:p-4"
              style={{ backgroundColor: 'var(--theme-surface)' }}
            >
              <SiteImage
                src={media.photography.technicianPanelWork.src}
                alt={media.photography.technicianPanelWork.alt}
                width={1200}
                height={800}
                className="h-auto w-full max-h-[70vh] object-contain"
                sizes="(max-width: 768px) 100vw, 896px"
                quality={85}
                priority
                fallbackLabel="Control panel works"
                showSkeleton={false}
              />
            </div>
          </figure>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal>
            <section
              className="h-full rounded border p-6"
              style={{ borderColor: 'var(--theme-border)', backgroundColor: 'var(--theme-bg-muted)' }}
            >
              <h2 className="font-display text-lg font-semibold text-accent">Vision</h2>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--theme-text-muted)' }}>
                {company.vision}
              </p>
            </section>
          </Reveal>
          <Reveal delay={80}>
            <section
              className="h-full rounded border p-6"
              style={{ borderColor: 'var(--theme-border)', backgroundColor: 'var(--theme-bg-muted)' }}
            >
              <h2 className="font-display text-lg font-semibold text-accent">Mission</h2>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--theme-text-muted)' }}>
                {company.mission}
              </p>
            </section>
          </Reveal>
        </div>

        <section className="mt-16">
          <h2 className="font-display text-2xl font-bold" style={{ color: 'var(--theme-text)' }}>
            Core values
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {company.values.map((value, i) => (
              <Reveal key={value.id} delay={i * 60}>
                <div
                  className="lift h-full rounded border p-5"
                  style={{
                    borderColor: 'var(--theme-border)',
                    backgroundColor: 'var(--theme-surface)',
                  }}
                >
                  <h3 className="font-display text-sm font-semibold text-accent">{value.title}</h3>
                  <p className="mt-2 text-sm" style={{ color: 'var(--theme-text-muted)' }}>
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-2xl font-bold" style={{ color: 'var(--theme-text)' }}>
            Leadership
          </h2>
          <p className="mt-2 text-sm" style={{ color: 'var(--theme-text-subtle)' }}>
            The people accountable for delivery
          </p>

          <Reveal>
            <figure
              className="relative mt-6 overflow-hidden rounded border"
              style={{ borderColor: 'var(--theme-border)' }}
            >
              <div
                className="relative flex items-center justify-center p-2 sm:p-4"
                style={{ backgroundColor: 'var(--theme-bg-muted)' }}
              >
                <SiteImage
                  src={media.leadership.ourTeam.src}
                  alt={media.leadership.ourTeam.alt}
                  width={1200}
                  height={900}
                  className="h-auto w-full max-h-[70vh] object-contain"
                  sizes="(max-width: 768px) 100vw, 896px"
                  quality={85}
                  fallbackLabel="ELSIM Engineering leadership"
                  showSkeleton={false}
                />
              </div>
            </figure>
          </Reveal>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {company.leadership.map((person, i) => (
              <Reveal key={person.name} delay={i * 60} as="li">
                <div
                  className="rounded border px-4 py-3.5"
                  style={{
                    borderColor: 'var(--theme-border)',
                    backgroundColor: 'var(--theme-surface)',
                  }}
                >
                  <span className="font-semibold" style={{ color: 'var(--theme-text)' }}>
                    {person.name}
                  </span>
                  <span className="mt-0.5 block text-xs text-accent">{person.role}</span>
                  {person.bio && (
                    <p className="mt-2 text-sm" style={{ color: 'var(--theme-text-muted)' }}>
                      {person.bio}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </ul>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-2xl font-bold" style={{ color: 'var(--theme-text)' }}>
            The team at work
          </h2>
          <p className="mt-2 text-sm" style={{ color: 'var(--theme-text-muted)' }}>
            Installations, transformer works, line works and site supervision across our project
            countries.
          </p>
          <WorkGallery photos={workPhotos.slice(0, 12)} className="mt-6" />
          <Link href="/projects" className="link-underline mt-5 inline-block text-sm font-semibold text-accent">
            See the full gallery
          </Link>
        </section>

        <div className="mt-16 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center rounded bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent transition-all hover:brightness-110"
          >
            Contact us
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center rounded border px-5 py-2.5 text-sm font-medium transition-colors"
            style={{ borderColor: 'var(--theme-border)', color: 'var(--theme-text)' }}
          >
            See the work
          </Link>
        </div>
      </div>
    </div>
  );
}
