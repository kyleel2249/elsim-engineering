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

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

const SITE_PHOTOS = [
  { asset: media.photography.engineerPanelInspection, label: 'Panel inspection' },
  { asset: media.photography.solarTeamReview, label: 'Solar installation' },
  { asset: media.photography.technicianPanelWork, label: 'Switchgear works' },
  { asset: media.photography.siteEngineerLaptop, label: 'Site engineering' },
];

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
      <section
        className="relative min-h-[min(92vh,780px)] overflow-hidden border-b"
        style={{ borderColor: 'var(--theme-border)' }}
      >
        <div className="absolute inset-0 z-0">
          <HeroSlideshow className="h-full w-full" variant="wallpaper" />
        </div>

        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-navy-950/92 via-navy-950/55 to-navy-950/10"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-navy-950/60 via-transparent to-navy-950/20"
          aria-hidden
        />

        <div className="relative z-[2] flex min-h-[min(92vh,780px)] flex-col justify-center px-4 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
          <div className="max-w-xl">
            <p className="label-technical" style={{ color: 'var(--theme-energy)' }}>
              Electrical · Energy · Technical
            </p>
            <h1
              className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]"
            >
              Power systems engineered for West Africa
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
              {company.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/quotation"
                className="rounded bg-energy px-5 py-3 text-sm font-bold uppercase tracking-wide text-on-energy transition-all hover:brightness-105"
              >
                Request a quotation
              </Link>
              <Link
                href="/projects"
                className="rounded border border-white/30 px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-white hover:bg-white/10"
              >
                View projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Marquee />

      <section
        className="border-b py-16 sm:py-20"
        style={{ backgroundColor: 'var(--theme-bg-muted)', borderColor: 'var(--theme-border)' }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="grid gap-8 rounded border p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-4"
            style={{ backgroundColor: 'var(--theme-bg)', borderColor: 'var(--theme-border)' }}
          >
            <StatCounter label="Projects on record" value={30} suffix="+" />
            <StatCounter label="West African markets" value={company.regions.length} />
            <StatCounter label="Core service lines" value={services.length} />
            <StatCounter label="Years of delivery" value={company.yearsOfExperience} suffix="+" />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" style={{ backgroundColor: 'var(--theme-bg)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="label-technical text-accent">Capabilities</p>
            <h2
              className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: 'var(--theme-text)' }}
            >
              Services across the power chain
            </h2>
            <p className="mt-4 text-lg" style={{ color: 'var(--theme-text-muted)' }}>
              From design and installation to inspection, maintenance and consulting — one accountable team.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
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
                    className="mt-4 font-display text-base font-semibold transition-colors group-hover:text-accent"
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
                </Link>
              </Reveal>
            ))}
          </div>

          <Link href="/services" className="link-underline mt-8 inline-block text-sm font-semibold text-accent">
            Explore all services
          </Link>
        </div>
      </section>

      <section
        className="border-y py-16 sm:py-20"
        style={{ backgroundColor: 'var(--theme-bg-muted)', borderColor: 'var(--theme-border)' }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="label-technical text-accent">On site</p>
              <h2
                className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl"
                style={{ color: 'var(--theme-text)' }}
              >
                Engineering that shows up in the field
              </h2>
              <p className="mt-4 text-lg" style={{ color: 'var(--theme-text-muted)' }}>
                Panel rooms, overhead lines, solar arrays and industrial plant — photographed on active ELSIM sites.
              </p>
              <EngineeringLine className="mt-8" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {SITE_PHOTOS.map(({ asset, label }) => (
                <PhotoPanel key={asset.src} asset={asset} label={label} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" style={{ backgroundColor: 'var(--theme-bg)' }}>
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
            {featured.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.06}>
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
                      src={project.cover?.src ?? media.photography.solarTeamReview.src}
                      alt={project.cover?.alt ?? project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <span className="label-technical text-accent">{project.location}</span>
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
        className="border-y py-16 sm:py-20"
        style={{ backgroundColor: 'var(--theme-bg-muted)', borderColor: 'var(--theme-border)' }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="label-technical text-accent">Gallery</p>
          <h2
            className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: 'var(--theme-text)' }}
          >
            Work in progress, captured on site
          </h2>
          <div className="mt-10">
            <WorkGallery photos={homeGalleryPhotos} />
          </div>
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
