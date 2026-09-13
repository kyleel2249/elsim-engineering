import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { services } from '@/lib/data/services';
import { getPublishedProjects } from '@/lib/data/projects';
import { company } from '@/lib/data/company';
import { media } from '@/lib/data/media';

const HeroHumanScene = dynamic(
  () => import('@/components/3d/HeroHumanScene').then((m) => m.HeroHumanScene),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 bg-gradient-to-br from-white via-metal-50 to-metal-100" aria-hidden="true" />
    ),
  }
);

const Logo3D = dynamic(
  () => import('@/components/3d/Logo3D').then((m) => m.Logo3D),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-40 items-center justify-center" aria-hidden="true">
        <div className="h-16 w-16 rounded-full bg-metal-100" />
      </div>
    ),
  }
);

export default function HomePage() {
  const projects = getPublishedProjects().slice(0, 6);

  return (
    <>
      <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-gradient-to-br from-white via-metal-50 to-metal-100">
        <HeroHumanScene />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-burgundy uppercase mb-4">
              People Powering Engineering • Ghana & West Africa
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.1rem] font-bold tracking-tight text-charcoal leading-[1.15]">
              Engineers. Systems.{' '}
              <span className="text-burgundy">Real-World Performance.</span>
            </h1>
            <p className="mt-6 text-lg text-charcoal-600 max-w-lg leading-relaxed">
              ELSIM Engineering teams design, install, test and maintain electrical and energy systems across Ghana and West Africa — with safety, reliability and professional execution at the centre of every project.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/quotation"
                className="inline-flex items-center justify-center rounded bg-burgundy px-6 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-burgundy-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy transition-colors"
              >
                Request a Project Consultation
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded border border-charcoal/20 bg-white/90 backdrop-blur-sm px-6 py-3.5 text-sm font-semibold text-charcoal hover:border-burgundy hover:text-burgundy transition-colors"
              >
                Explore Our Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3D animated brand mark */}
      <section className="py-10 bg-white border-t border-metal-200" aria-label="ELSIM Engineering brand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-2">
            <Logo3D height={140} className="w-full max-w-[220px] sm:max-w-[280px]" />
            <p className="text-[10px] uppercase tracking-[0.25em] text-charcoal-400 font-medium">
              ELSIM Engineering Firm
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-metal-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.2em] text-burgundy uppercase mb-3">
            Our people at work
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-charcoal mb-8">
            Engineers and technicians on site
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                src: media.photography.engineerPanelInspection,
                alt: 'ELSIM engineer inspecting an electrical panel with a flashlight',
                label: 'Electrical inspection',
              },
              {
                src: media.photography.solarTeamReview,
                alt: 'ELSIM solar team reviewing plans at a solar installation site',
                label: 'Solar installation',
              },
              {
                src: media.photography.technicianPanelWork,
                alt: 'ELSIM technician working on a control panel',
                label: 'Panel works',
              },
              {
                src: media.photography.siteEngineerLaptop,
                alt: 'Site engineer reviewing project data on a laptop',
                label: 'Site engineering',
              },
            ].map((item) => (
              <figure key={item.label} className="group relative aspect-[4/5] overflow-hidden rounded border border-metal-200 bg-metal-100">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/80 to-transparent px-3 py-3 text-xs font-medium text-white">
                  {item.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="grid sm:grid-cols-2 border-t border-metal-200">
        <div className="relative aspect-[16/9] sm:aspect-auto sm:min-h-[280px]">
          <Image
            src={media.infrastructure.powerTransmission}
            alt="High-voltage transmission insulator and power infrastructure"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
        <div className="relative aspect-[16/9] sm:aspect-auto sm:min-h-[280px]">
          <Image
            src={media.infrastructure.electricalPole}
            alt="Electrical distribution pole and cross-arm infrastructure"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="py-20 bg-white border-t border-metal-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-burgundy uppercase mb-3">01 — Company</p>
              <h2 className="font-display text-3xl font-bold text-charcoal">About ELSIM Engineering</h2>
              <p className="mt-4 text-charcoal-600 leading-relaxed">{company.description}</p>
              <Link href="/about" className="mt-6 inline-flex items-center text-sm font-semibold text-burgundy hover:text-burgundy-600 transition-colors">
                Meet the team →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {company.values.slice(0, 4).map((v) => (
                <div key={v.id} className="rounded border border-metal-200 bg-metal-50 p-5">
                  <h3 className="font-display text-sm font-semibold text-burgundy uppercase tracking-wide">{v.title}</h3>
                  <p className="mt-2 text-sm text-charcoal-600">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-metal-50 border-t border-metal-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] text-burgundy uppercase mb-3">02 — Capabilities</p>
            <h2 className="font-display text-3xl font-bold text-charcoal">What Our Teams Deliver</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative rounded border border-metal-200 bg-white p-6 hover:border-burgundy/40 hover:shadow-md transition-all"
              >
                <h3 className="font-display text-lg font-semibold text-charcoal group-hover:text-burgundy transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-charcoal-600">{service.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-metal-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] text-burgundy uppercase mb-3">03 — Projects</p>
            <h2 className="font-display text-3xl font-bold text-charcoal">Where Our Engineers Have Worked</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.slug} className="rounded border border-metal-200 bg-metal-50 p-5">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-burgundy">{project.location}</span>
                <h3 className="font-display text-base font-semibold text-charcoal mt-1">{project.title}</h3>
                <p className="mt-2 text-sm text-charcoal-600 line-clamp-2">{project.shortDescription}</p>
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
          <p className="mt-4 text-metal-400">Speak with the ELSIM team about electrical, solar or maintenance support.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/quotation" className="rounded bg-burgundy px-6 py-3.5 text-sm font-semibold text-white hover:bg-burgundy-600">
              Request a Quotation
            </Link>
            <Link href="/contact" className="rounded border border-metal-600 px-6 py-3.5 text-sm font-semibold text-white hover:border-burgundy">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
