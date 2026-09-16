import Link from 'next/link';
import type { Metadata } from 'next';
import { services } from '@/lib/data/services';
import { getPublishedProjects } from '@/lib/data/projects';
import { company } from '@/lib/data/company';
import { media } from '@/lib/data/media';
import { HeroSlideshow } from '@/components/hero/HeroSlideshow';
import { PhotoPanel } from '@/components/media/PhotoPanel';
import { Reveal } from '@/components/motion/Reveal';
import { StatCounter } from '@/components/motion/StatCounter';
import { Marquee } from '@/components/motion/Marquee';
import { BrandField } from '@/components/3d/BrandField';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

const SITE_PHOTOS = [
  { asset: media.photography.engineerPanelInspection, label: 'Panel inspection' },
  { asset: media.photography.solarTeamReview, label: 'Solar installation' },
  { asset: media.photography.technicianPanelWork, label: 'Switchgear works' },
  { asset: media.photography.siteEngineerLaptop, label: 'Site engineering' },
];

export default function HomePage() {
  const projects = getPublishedProjects();
  const featured = projects.slice(0, 6);

  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section
        className="relative border-b"
        style={{ backgroundColor: 'var(--theme-bg)', borderColor: 'var(--theme-border)' }}
      >
        <div className="mx-auto max-w-7xl lg:grid lg:min-h-[min(86vh,700px)] lg:grid-cols-2">
          <div className="relative order-2 h-[44vh] min-h-[300px] sm:h-[50vh] lg:order-1 lg:h-auto">
            <HeroSlideshow />
          </div>

          <div
            className="order-1 flex items-center lg:order-2"
            style={{ backgroundColor: 'var(--theme-bg-muted)' }}
          >
            <div className="w-full px-4 py-14 sm:px-8 lg:px-12 lg:py-16">
              <p className="text-xs font-semibold tracking-[0.18em] text-accent">
                Ghana and West Africa
              </p>

              <h1
                className="mt-4 font-display text-3xl font-bold leading-[1.12] tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]"
                style={{ color: 'var(--theme-text)' }}
              >
                Electrical systems designed, installed and kept running
              </h1>

              <p
                className="mt-5 max-w-lg text-base leading-relaxed text-pretty sm:text-lg"
                style={{ color: 'var(--theme-text-muted)' }}
              >
                {company.tagline} ELSIM teams design, install, test and maintain electrical and
                energy systems across six countries — the same firm from the load calculation to the
                maintenance visit.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/quotation"
                  className="inline-flex items-center justify-center rounded bg-accent px-6 py-3.5 text-sm font-semibold text-on-accent shadow-panel transition-all hover:brightness-110"
                >
                  Request a project consultation
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center rounded border px-6 py-3.5 text-sm font-semibold transition-colors hover:border-accent"
                  style={{
                    borderColor: 'var(--theme-border-strong)',
                    backgroundColor: 'var(--theme-surface)',
                    color: 'var(--theme-text)',
                  }}
                >
                  See the work
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-6">
                <StatCounter value={projects.length} label="Projects on record" />
                <StatCounter value={company.regions.length} label="Countries" />
                <StatCounter value={services.length} label="Service lines" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- Regions rail */}
      <section
        className="border-b py-3"
        style={{ backgroundColor: 'var(--theme-bg-muted)', borderColor: 'var(--theme-border)' }}
      >
        <Marquee items={company.regions} />
      </section>

      {/* --------------------------------------------------------- Capabilities */}
      <section
        className="border-b py-20"
        style={{ backgroundColor: 'var(--theme-bg)', borderColor: 'var(--theme-border)' }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <h2
                className="font-display text-2xl font-bold tracking-tight sm:text-3xl"
                style={{ color: 'var(--theme-text)' }}
              >
                What our teams deliver
              </h2>
              <p className="mt-3 leading-relaxed" style={{ color: 'var(--theme-text-muted)' }}>
                Five service lines, delivered by the same engineers who will maintain the
                installation afterwards.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
                  <h3
                    className="font-display text-lg font-semibold transition-colors group-hover:text-accent"
                    style={{ color: 'var(--theme-text)' }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="mt-2.5 flex-1 text-sm leading-relaxed"
                    style={{ color: 'var(--theme-text-muted)' }}
                  >
                    {service.shortDescription}
                  </p>
                  <span
                    className="mt-5 h-px w-10 transition-all duration-300 group-hover:w-20"
                    style={{ backgroundColor: 'var(--theme-accent-2)' }}
                    aria-hidden
                  />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ People on site */}
      <section
        className="border-b py-20"
        style={{ backgroundColor: 'var(--theme-bg-muted)', borderColor: 'var(--theme-border)' }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2
              className="font-display text-2xl font-bold tracking-tight sm:text-3xl"
              style={{ color: 'var(--theme-text)' }}
            >
              Engineers and technicians at work
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {SITE_PHOTOS.map((item, i) => (
              <Reveal key={item.label} delay={i * 80}>
                <PhotoPanel
                  asset={item.asset}
                  label={item.label}
                  ratio="16 / 10"
                  priority={i < 2}
                />
              </Reveal>
            ))}
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <Reveal>
              <PhotoPanel
                asset={media.infrastructure.electricalPole}
                label="Distribution infrastructure"
                ratio="16 / 9"
              />
            </Reveal>
            <Reveal delay={80}>
              <PhotoPanel
                asset={media.infrastructure.powerTransmission}
                label="Transmission works"
                ratio="16 / 9"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- Company */}
      <section
        className="border-b py-20"
        style={{ backgroundColor: 'var(--theme-bg)', borderColor: 'var(--theme-border)' }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div>
                <h2
                  className="font-display text-2xl font-bold tracking-tight sm:text-3xl"
                  style={{ color: 'var(--theme-text)' }}
                >
                  About ELSIM Engineering
                </h2>
                <p className="mt-4 leading-relaxed" style={{ color: 'var(--theme-text-muted)' }}>
                  {company.description}
                </p>
                <Link href="/about" className="link-underline mt-6 inline-block text-sm font-semibold text-accent">
                  Meet the team
                </Link>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="grid grid-cols-2 gap-4">
                {company.values.slice(0, 4).map((value) => (
                  <div
                    key={value.id}
                    className="rounded border p-5"
                    style={{
                      borderColor: 'var(--theme-border)',
                      backgroundColor: 'var(--theme-bg-muted)',
                    }}
                  >
                    <h3 className="font-display text-sm font-semibold text-accent">{value.title}</h3>
                    <p className="mt-2 text-sm" style={{ color: 'var(--theme-text-muted)' }}>
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ Projects */}
      <section
        className="border-b py-20"
        style={{ backgroundColor: 'var(--theme-bg-muted)', borderColor: 'var(--theme-border)' }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2
              className="font-display text-2xl font-bold tracking-tight sm:text-3xl"
              style={{ color: 'var(--theme-text)' }}
            >
              Where our engineers have worked
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project, i) => (
              <Reveal key={project.slug} delay={i * 60}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="lift group flex h-full flex-col rounded border p-5"
                  style={{
                    borderColor: 'var(--theme-border)',
                    backgroundColor: 'var(--theme-surface)',
                  }}
                >
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-accent">
                    {project.location}
                  </span>
                  <h3
                    className="mt-1.5 font-display text-base font-semibold transition-colors group-hover:text-accent"
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
                </Link>
              </Reveal>
            ))}
          </div>

          <Link href="/projects" className="link-underline mt-8 inline-block text-sm font-semibold text-accent">
            View all {projects.length} projects
          </Link>
        </div>
      </section>

      {/* ----------------------------------------------------------------- CTA */}
      <section className="eng-grid-dark relative overflow-hidden bg-navy-900 py-20">
        {/* WebGL accent: lazy, viewport-gated, and skipped entirely on
            low-power devices or under reduced motion. See BrandField. */}
        <BrandField className="pointer-events-none absolute inset-0 opacity-70" />

        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Ready to discuss your next project?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-navy-200">
            Tell us the location, the load and your timeline. We will come back with an approach.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/quotation"
              className="rounded bg-gold px-6 py-3.5 text-sm font-semibold text-navy-900 transition-all hover:bg-gold-400"
            >
              Request a quotation
            </Link>
            <Link
              href="/contact"
              className="rounded border border-navy-400 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-gold hover:text-gold"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
