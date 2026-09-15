import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { services } from '@/lib/data/services';
import { getPublishedProjects } from '@/lib/data/projects';
import { company } from '@/lib/data/company';
import { media } from '@/lib/data/media';
import { cdnUrl } from '@/lib/cdn';
import { HeroSlideshow } from '@/components/hero/HeroSlideshow';

const Logo3D = dynamic(
  () => import('@/components/3d/Logo3D').then((m) => m.Logo3D),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-40 items-center justify-center" aria-hidden="true">
        <div className="h-16 w-16 rounded-full opacity-30" style={{ background: 'var(--theme-border)' }} />
      </div>
    ),
  }
);

const peoplePhotos = [
  { ...media.photography.engineerPanelInspection, label: 'Electrical inspection' },
  { ...media.photography.solarTeamReview, label: 'Solar installation' },
  { ...media.photography.technicianPanelWork, label: 'Panel works' },
  { ...media.photography.siteEngineerLaptop, label: 'Site engineering' },
] as const;

export default function HomePage() {
  const projects = getPublishedProjects().slice(0, 6);

  return (
    <>
      <section
        className="relative border-b"
        style={{ backgroundColor: 'var(--theme-bg)', borderColor: 'var(--theme-border)' }}
      >
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:min-h-[min(88vh,720px)]">
          <div className="relative order-2 lg:order-1 h-[42vh] min-h-[280px] sm:h-[48vh] lg:h-auto lg:min-h-[520px]">
            <HeroSlideshow />
          </div>

          <div
            className="order-1 lg:order-2 flex items-center"
            style={{ backgroundColor: 'var(--theme-bg-muted)' }}
          >
            <div className="w-full px-4 sm:px-8 lg:px-12 py-12 lg:py-16">
              <p className="text-xs font-semibold tracking-[0.2em] text-burgundy uppercase mb-4">
                People Powering Engineering • Ghana & West Africa
              </p>
              <h1
                className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-[1.15]"
                style={{ color: 'var(--theme-text)' }}
              >
                Engineers. Systems.{' '}
                <span className="text-burgundy">Real-World Performance.</span>
              </h1>
              <p
                className="mt-5 text-base sm:text-lg max-w-lg leading-relaxed"
                style={{ color: 'var(--theme-text-muted)' }}
              >
                ELSIM Engineering teams design, install, test and maintain electrical and energy systems across Ghana and West Africa — with safety, reliability and professional execution at the centre of every project.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/quotation"
                  className="inline-flex items-center justify-center rounded bg-burgundy px-6 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-burgundy-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy transition-colors"
                >
                  Request a Project Consultation
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center rounded border px-6 py-3.5 text-sm font-semibold hover:border-burgundy hover:text-burgundy transition-colors"
                  style={{
                    borderColor: 'var(--theme-border)',
                    backgroundColor: 'var(--theme-surface)',
                    color: 'var(--theme-text)',
                  }}
                >
                  Explore Our Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-10 border-t"
        style={{ backgroundColor: 'var(--theme-bg)', borderColor: 'var(--theme-border)' }}
        aria-label="ELSIM Engineering brand"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-2">
            <Logo3D height={140} className="w-full max-w-[220px] sm:max-w-[280px]" />
            <p
              className="text-[10px] uppercase tracking-[0.25em] font-medium"
              style={{ color: 'var(--theme-text-muted)' }}
            >
              ELSIM Engineering Firm
            </p>
          </div>
        </div>
      </section>

      <section
        className="py-16 border-t"
        style={{ backgroundColor: 'var(--theme-bg)', borderColor: 'var(--theme-border)' }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.2em] text-burgundy uppercase mb-3">
            Our people at work
          </p>
          <h2
            className="font-display text-2xl sm:text-3xl font-bold mb-8"
            style={{ color: 'var(--theme-text)' }}
          >
            Engineers and technicians on site
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {peoplePhotos.map((item) => (
              <figure
                key={item.label}
                className="flex flex-col rounded border overflow-hidden"
                style={{
                  borderColor: 'var(--theme-border)',
                  backgroundColor: 'var(--theme-bg-muted)',
                }}
              >
                <div
                  className="relative w-full flex items-center justify-center p-2 sm:p-4"
                  style={{ backgroundColor: 'var(--theme-surface)' }}
                >
                  <Image
                    src={cdnUrl(item.src)}
                    alt={item.alt}
                    width={1200}
                    height={900}
                    className="w-full h-auto max-h-[70vh] object-contain"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    quality={85}
                    loading="eager"
                  />
                </div>
                <figcaption
                  className="px-4 py-3 text-sm font-medium border-t"
                  style={{
                    color: 'var(--theme-text)',
                    borderColor: 'var(--theme-border)',
                    backgroundColor: 'var(--theme-surface)',
                  }}
                >
                  {item.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section
        className="border-t"
        style={{ backgroundColor: 'var(--theme-bg)', borderColor: 'var(--theme-border)' }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-8 sm:grid-cols-2">
          {[
            {
              src: media.infrastructure.powerTransmission.src,
              alt: media.infrastructure.powerTransmission.alt,
              label: 'Power transmission',
            },
            {
              src: media.infrastructure.electricalPole.src,
              alt: media.infrastructure.electricalPole.alt,
              label: 'Electrical distribution pole',
            },
          ].map((item) => (
            <figure
              key={item.label}
              className="flex flex-col rounded border overflow-hidden"
              style={{
                borderColor: 'var(--theme-border)',
                backgroundColor: 'var(--theme-bg-muted)',
              }}
            >
              <div
                className="p-2 sm:p-4 flex items-center justify-center"
                style={{ backgroundColor: 'var(--theme-surface)' }}
              >
                <Image
                  src={cdnUrl(item.src)}
                  alt={item.alt}
                  width={1200}
                  height={600}
                  className="w-full h-auto max-h-[60vh] object-contain"
                  sizes="(max-width: 640px) 100vw, 50vw"
                  quality={85}
                  loading="eager"
                />
              </div>
              <figcaption
                className="px-4 py-3 text-sm font-medium border-t"
                style={{
                  color: 'var(--theme-text)',
                  borderColor: 'var(--theme-border)',
                  backgroundColor: 'var(--theme-surface)',
                }}
              >
                {item.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section
        className="py-20 border-t"
        style={{ backgroundColor: 'var(--theme-bg)', borderColor: 'var(--theme-border)' }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-burgundy uppercase mb-3">01 — Company</p>
              <h2 className="font-display text-3xl font-bold" style={{ color: 'var(--theme-text)' }}>
                About ELSIM Engineering
              </h2>
              <p className="mt-4 leading-relaxed" style={{ color: 'var(--theme-text-muted)' }}>
                {company.description}
              </p>
              <Link
                href="/about"
                className="mt-6 inline-flex items-center text-sm font-semibold text-burgundy hover:text-burgundy-600 transition-colors"
              >
                Meet the team →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {company.values.slice(0, 4).map((v) => (
                <div
                  key={v.id}
                  className="rounded border p-5"
                  style={{
                    borderColor: 'var(--theme-border)',
                    backgroundColor: 'var(--theme-bg-muted)',
                  }}
                >
                  <h3 className="font-display text-sm font-semibold text-burgundy uppercase tracking-wide">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm" style={{ color: 'var(--theme-text-muted)' }}>
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-20 border-t"
        style={{ backgroundColor: 'var(--theme-bg-muted)', borderColor: 'var(--theme-border)' }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] text-burgundy uppercase mb-3">02 — Capabilities</p>
            <h2 className="font-display text-3xl font-bold" style={{ color: 'var(--theme-text)' }}>
              What Our Teams Deliver
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative rounded border p-6 hover:border-burgundy/40 hover:shadow-md transition-all"
                style={{
                  borderColor: 'var(--theme-border)',
                  backgroundColor: 'var(--theme-surface)',
                }}
              >
                <h3
                  className="font-display text-lg font-semibold group-hover:text-burgundy transition-colors"
                  style={{ color: 'var(--theme-text)' }}
                >
                  {service.title}
                </h3>
                <p className="mt-2 text-sm" style={{ color: 'var(--theme-text-muted)' }}>
                  {service.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-20 border-t"
        style={{ backgroundColor: 'var(--theme-bg)', borderColor: 'var(--theme-border)' }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] text-burgundy uppercase mb-3">03 — Projects</p>
            <h2 className="font-display text-3xl font-bold" style={{ color: 'var(--theme-text)' }}>
              Where Our Engineers Have Worked
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.slug}
                className="rounded border p-5"
                style={{
                  borderColor: 'var(--theme-border)',
                  backgroundColor: 'var(--theme-bg-muted)',
                }}
              >
                <span className="text-[10px] font-semibold uppercase tracking-wider text-burgundy">
                  {project.location}
                </span>
                <h3 className="font-display text-base font-semibold mt-1" style={{ color: 'var(--theme-text)' }}>
                  {project.title}
                </h3>
                <p className="mt-2 text-sm line-clamp-2" style={{ color: 'var(--theme-text-muted)' }}>
                  {project.shortDescription}
                </p>
              </div>
            ))}
          </div>
          <Link href="/projects" className="mt-8 inline-flex text-sm font-semibold text-burgundy">
            View all projects →
          </Link>
        </div>
      </section>

      <section className="py-20 bg-charcoal eng-grid-dark">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-white">Ready to discuss your next project?</h2>
          <p className="mt-4 text-metal-400">
            Speak with the ELSIM team about electrical, solar or maintenance support.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/quotation"
              className="rounded bg-burgundy px-6 py-3.5 text-sm font-semibold text-white hover:bg-burgundy-600"
            >
              Request a Quotation
            </Link>
            <Link
              href="/contact"
              className="rounded border border-metal-600 px-6 py-3.5 text-sm font-semibold text-white hover:border-burgundy"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
