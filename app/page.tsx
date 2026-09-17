import Link from 'next/link';
import { ArrowRight, BadgeCheck, Shield, Zap } from 'lucide-react';
import { Hero } from '@/components/home/Hero';
import { Reveal } from '@/components/motion/Reveal';
import { BrandField } from '@/components/brand/BrandField';
import { company } from '@/lib/data/company';
import { services } from '@/lib/data/services';
import { projects } from '@/lib/data/projects';
import { media } from '@/lib/data/media';

const highlights = [
  {
    icon: Zap,
    title: 'End-to-end delivery',
    body: 'Design, supply, install, test and commission — one accountable team from survey to handover.',
  },
  {
    icon: Shield,
    title: 'Safety first',
    body: 'Licensed workmanship, documented procedures and a culture that treats every live panel with respect.',
  },
  {
    icon: BadgeCheck,
    title: 'Regional reach',
    body: `Operating from Accra across ${company.regions.length} West African markets with local partners where it counts.`,
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="py-20" style={{ backgroundColor: 'var(--theme-bg)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="label-technical text-accent">What we do</p>
            <h2
              className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: 'var(--theme-text)' }}
            >
              Electrical and energy engineering for commercial and industrial clients
            </h2>
            <p className="mt-4 text-lg" style={{ color: 'var(--theme-text-muted)' }}>
              {company.tagline}
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div
                  className="lift rounded border p-6"
                  style={{
                    backgroundColor: 'var(--theme-surface)',
                    borderColor: 'var(--theme-border)',
                  }}
                >
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded"
                    style={{ backgroundColor: 'var(--theme-accent-soft)' }}
                  >
                    <item.icon className="h-5 w-5 text-accent" aria-hidden />
                  </div>
                  <h3
                    className="mt-4 font-display text-lg font-semibold"
                    style={{ color: 'var(--theme-text)' }}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--theme-text-muted)' }}>
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-20"
        style={{ backgroundColor: 'var(--theme-bg-muted)', borderColor: 'var(--theme-border)' }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="label-technical text-accent">Services</p>
              <h2
                className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl"
                style={{ color: 'var(--theme-text)' }}
              >
                Capabilities across the power chain
              </h2>
            </div>
            <Link href="/services" className="link-underline text-sm font-semibold text-accent">
              All services
            </Link>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service, i) => (
              <Reveal key={service.slug} delay={i * 0.05}>
                <Link
                  href={`/services/${service.slug}`}
                  className="lift group flex h-full flex-col rounded border p-5"
                  style={{
                    backgroundColor: 'var(--theme-surface)',
                    borderColor: 'var(--theme-border)',
                  }}
                >
                  <span
                    className="inline-flex h-8 w-8 items-center justify-center rounded text-xs font-bold text-on-accent"
                    style={{ backgroundColor: 'var(--theme-accent)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3
                    className="mt-4 font-display text-base font-semibold group-hover:text-accent"
                    style={{ color: 'var(--theme-text)' }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="mt-2 flex-1 text-sm leading-relaxed"
                    style={{ color: 'var(--theme-text-muted)' }}
                  >
                    {service.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                    Learn more <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: 'var(--theme-bg)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="label-technical text-accent">Selected work</p>
              <h2
                className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl"
                style={{ color: 'var(--theme-text)' }}
              >
                Projects delivered across the region
              </h2>
            </div>
            <Link href="/projects" className="link-underline text-sm font-semibold text-accent">
              View projects
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.08}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="lift group block overflow-hidden rounded border"
                  style={{
                    backgroundColor: 'var(--theme-surface)',
                    borderColor: 'var(--theme-border)',
                  }}
                >
                  <div
                    className="aspect-[16/10] overflow-hidden"
                    style={{ backgroundColor: 'var(--theme-bg-muted)' }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image?.src ?? media.photography.solarTeamReview.src}
                      alt={project.image?.alt ?? project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <p className="label-technical text-accent">{project.sector}</p>
                    <h3
                      className="mt-2 font-display text-lg font-semibold group-hover:text-accent"
                      style={{ color: 'var(--theme-text)' }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="mt-2 line-clamp-2 text-sm"
                      style={{ color: 'var(--theme-text-muted)' }}
                    >
                      {project.shortDescription}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Link href="/projects" className="link-underline mt-8 inline-block text-sm font-semibold text-accent">
            View all {projects.length} projects
          </Link>
        </div>
      </section>

      <section
        className="eng-grid relative overflow-hidden py-20"
        style={{ backgroundColor: 'var(--theme-bg)' }}
      >
        <BrandField className="pointer-events-none absolute inset-0 opacity-40" />

        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <p className="label-technical" style={{ color: 'var(--theme-energy)' }}>
            Let&rsquo;s build together
          </p>
          <h2
            className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl"
            style={{ color: 'var(--theme-text)' }}
          >
            Ready to discuss your next project?
          </h2>
          <p className="mx-auto mt-4 max-w-xl" style={{ color: 'var(--theme-text-muted)' }}>
            Tell us the location, the load and your timeline. We will come back with an approach.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/quotation"
              className="rounded bg-energy px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-on-energy transition-all hover:brightness-105"
            >
              Request a Project Consultation →
            </Link>
            <Link
              href="/contact"
              className="rounded border px-6 py-3.5 text-sm font-bold uppercase tracking-wide transition-colors"
              style={{
                borderColor: 'var(--theme-border-strong)',
                color: 'var(--theme-text)',
              }}
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
