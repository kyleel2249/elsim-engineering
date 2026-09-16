import Link from 'next/link';
import type { Metadata } from 'next';
import { services } from '@/lib/data/services';
import { getPublishedProjects } from '@/lib/data/projects';
import { company } from '@/lib/data/company';
import { media } from '@/lib/data/media';
import { HeroSlideshow } from '@/components/hero/HeroSlideshow';
import { EngineeringLine } from '@/components/brand/EngineeringLine';
import { PhotoPanel } from '@/components/media/PhotoPanel';
import { WorkGallery } from '@/components/media/WorkGallery';
import { Reveal } from '@/components/motion/Reveal';
import { StatCounter } from '@/components/motion/StatCounter';
import { Marquee } from '@/components/motion/Marquee';
import { BrandField } from '@/components/3d/BrandField';
import { workPhotos } from '@/lib/data/media';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

const SITE_PHOTOS = [
  { asset: media.photography.engineerPanelInspection, label: 'Panel inspection' },
  { asset: media.photography.solarTeamReview, label: 'Solar installation' },
  { asset: media.photography.technicianPanelWork, label: 'Switchgear works' },
  { asset: media.photography.siteEngineerLaptop, label: 'Site engineering' },
];

/** Curated cross-section for the homepage teaser; the full set lives on /projects. */
const homeGalleryPhotos = [
  media.work.transformerKioskInstallation,
  media.work.linemanPoleTop,
  media.work.panelWiringTeam,
  media.work.machineHallOverview,
  media.work.busbarPanelCloseup,
  media.work.meterInspection,
  media.work.steelFrameAssembly01,
  media.work.siteTeamWalkthrough,
];

export default function HomePage() {
  const projects = getPublishedProjects();
  const featured = projects.slice(0, 6);

  return (
    <>
      {/* ---------------------------------------------------------------- Hero
          "Technical Premium" hero: full-width, dark navy gradient panel on
          the left carrying the message, authentic ELSIM field photography
          dominating the right. */}
      <section className="relative border-b" style={{ borderColor: 'var(--theme-border)' }}>
        <div className="lg:grid lg:min-h-[min(90vh,760px)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
          {/* Left — navy panel, the message */}
          <div className="relative order-1 overflow-hidden bg-gradient-to-br from-elnavy to-elblue">
            {/* Subtle blueprint grid + single-line motif, never a literal schematic */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                backgroundSize: '56px 56px',
              }}
            />

            <div className="relative flex h-full flex-col justify-center px-4 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
              <div className="max-w-xl">
                <p className="label-technical text-elcyan">
                  Electrical <span className="text-elamber">•</span> Energy{' '}
                  <span className="text-elamber">•</span> Industrial
                </p>

                <EngineeringLine className="mt-4 max-w-[220px] text-elcyan" nodes={2} />

                <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white text-balance sm:text-5xl lg:text-[3.25rem]">
                  Engineering the power infrastructure that keeps business moving.
                </h1>

                <ul className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-1.5">
                  {['Design', 'Installation', 'Testing', 'Commissioning', 'Maintenance'].map(
                    (step, i, arr) => (
                      <li key={step} className="flex items-center gap-3">
                        <span className="label-technical text-white/80">{step}.</span>
                        {i < arr.length - 1 && <span className="h-1 w-1 rounded-full bg-elamber" />}
                      </li>
                    )
                  )}
                </ul>

                <p className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-elamber" />
                  <span className="label-technical text-white">Ghana &amp; West Africa</span>
                </p>

                <div className="mt-9 flex flex-wrap gap-3">
                  <Link
                    href="/quotation"
                    className="group inline-flex items-center justify-center gap-2 rounded bg-elamber px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-elgraphite shadow-panel transition-all hover:brightness-105"
                  >
                    Request a project consultation
                    <span className="transition-transform group-hover:translate-x-0.5">→</span>
                  </Link>
                  <Link
                    href="/projects"
                    className="group inline-flex items-center justify-center gap-2 rounded border border-white/30 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-elcyan hover:text-elcyan"
                  >
                    Explore our projects
                    <span className="transition-transform group-hover:translate-x-0.5">→</span>
                  </Link>
                </div>

                <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/15 pt-8">
                  <StatCounter tone="light" value={projects.length} label="Projects on record" />
                  <StatCounter tone="light" value={company.regions.length} label="Countries" />
                  <StatCounter tone="light" value={services.length} label="Service lines" />
                </div>
              </div>
            </div>
          </div>

          {/* Right — authentic ELSIM field photography, dominant */}
          <div className="relative order-2 h-[46vh] min-h-[320px] sm:h-[54vh] lg:h-auto">
            <HeroSlideshow />
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

          <div className="mt-6 grid gap-6 sm:grid-cols-5">
            <Reveal className="sm:col-span-3">
              <PhotoPanel
                asset={media.infrastructure.electricalPole}
                label="Distribution infrastructure"
                ratio="16 / 9"
              />
            </Reveal>
            <Reveal delay={80} className="sm:col-span-2">
              <PhotoPanel
                asset={media.infrastructure.powerTransmission}
                label="Transmission works"
                ratio="3 / 4"
              />
            </Reveal>
          </div>

          <Reveal>
            <div className="mt-14 flex items-baseline justify-between gap-4">
              <h3 className="font-display text-xl font-semibold" style={{ color: 'var(--theme-text)' }}>
                Across our sites
              </h3>
              <Link href="/projects" className="link-underline shrink-0 text-sm font-semibold text-accent">
                See the full gallery
              </Link>
            </div>
            <WorkGallery photos={homeGalleryPhotos} className="mt-6" />
          </Reveal>
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
