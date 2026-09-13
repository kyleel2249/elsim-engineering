import Link from 'next/link';
import { HeroEnergyField } from '@/components/3d/HeroEnergyField';
import { services } from '@/lib/data/services';
import { getPublishedProjects } from '@/lib/data/projects';
import { company } from '@/lib/data/company';

export default function HomePage() {
  const projects = getPublishedProjects().slice(0, 6);

  return (
    <>
      {/* Hero – Light industrial environment */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-gradient-to-br from-white via-metal-50 to-metal-100 eng-grid">
        <HeroEnergyField />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-burgundy uppercase mb-4">
              Electrical Engineering • Ghana & West Africa
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-charcoal leading-[1.15]">
              Engineering Systems Built for{' '}
              <span className="text-burgundy">Real-World Performance.</span>
            </h1>
            <p className="mt-6 text-lg text-charcoal-600 max-w-xl leading-relaxed">
              ELSIM Engineering delivers electrical, energy, industrial and technical solutions designed around safety, reliability and professional execution.
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
                className="inline-flex items-center justify-center rounded border border-charcoal/20 bg-white px-6 py-3.5 text-sm font-semibold text-charcoal hover:border-burgundy hover:text-burgundy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy transition-colors"
              >
                Explore Our Projects
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block">
          <div className="flex flex-col items-center gap-2 text-charcoal-400">
            <span className="text-[10px] tracking-[0.25em] uppercase font-medium">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-burgundy/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-20 bg-white border-t border-metal-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-burgundy uppercase mb-3">
                01 — Company
              </p>
              <h2 className="font-display text-3xl font-bold text-charcoal">
                About ELSIM Engineering
              </h2>
              <p className="mt-4 text-charcoal-600 leading-relaxed">
                {company.description}
              </p>
              <p className="mt-4 text-charcoal-600 leading-relaxed">
                Operating from Accra, Ghana, with project experience across Togo, Côte d'Ivoire, Burkina Faso, Senegal and Niger.
              </p>
              <Link
                href="/about"
                className="mt-6 inline-flex items-center text-sm font-semibold text-burgundy hover:text-burgundy-600 transition-colors"
              >
                Learn more about us
                <span className="ml-2" aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {company.values.slice(0, 4).map((v) => (
                <div
                  key={v.id}
                  className="rounded border border-metal-200 bg-metal-50 p-5"
                >
                  <h3 className="font-display text-sm font-semibold text-burgundy uppercase tracking-wide">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm text-charcoal-600">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-metal-50 border-t border-metal-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] text-burgundy uppercase mb-3">
              02 — Capabilities
            </p>
            <h2 className="font-display text-3xl font-bold text-charcoal">Core Services</h2>
            <p className="mt-3 text-charcoal-600">
              Professional electrical and energy solutions for commercial, industrial and institutional clients.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative rounded border border-metal-200 bg-white p-6 hover:border-burgundy/40 hover:shadow-md transition-all duration-300"
              >
                <div className="h-9 w-9 rounded bg-burgundy/10 flex items-center justify-center mb-4 group-hover:bg-burgundy/15 transition-colors">
                  <span className="text-burgundy text-sm font-bold">◆</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-charcoal group-hover:text-burgundy transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-charcoal-600 leading-relaxed">
                  {service.shortDescription}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-burgundy opacity-0 group-hover:opacity-100 transition-opacity">
                  View details →
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded border border-charcoal/20 px-5 py-2.5 text-sm font-medium text-charcoal hover:border-burgundy hover:text-burgundy transition-colors"
            >
              View all services
            </Link>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-white border-t border-metal-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] text-burgundy uppercase mb-3">
              03 — Projects
            </p>
            <h2 className="font-display text-3xl font-bold text-charcoal">Selected Projects</h2>
            <p className="mt-3 text-charcoal-600">
              Verified project experience across Ghana and West Africa. Photography and detailed case studies pending approved assets.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group rounded border border-metal-200 bg-metal-50 p-5 hover:border-burgundy/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-burgundy">
                    {project.location}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-charcoal-400">
                    {project.sector}
                  </span>
                </div>
                <h3 className="font-display text-base font-semibold text-charcoal group-hover:text-burgundy transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-charcoal-600 line-clamp-2">
                  {project.shortDescription}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/projects"
              className="inline-flex items-center text-sm font-semibold text-burgundy hover:text-burgundy-600 transition-colors"
            >
              View all projects
              <span className="ml-2" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why ELSIM – dark technical section */}
      <section className="py-20 bg-charcoal eng-grid-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] text-burgundy-300 uppercase mb-3">
              04 — Why ELSIM
            </p>
            <h2 className="font-display text-3xl font-bold text-white">
              Why Work With ELSIM
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Safety First',
                text: 'Safety-conscious delivery protecting people, equipment and infrastructure on every engagement.',
              },
              {
                title: 'Regional Experience',
                text: 'Project delivery across Ghana, Togo, Côte d\'Ivoire, Burkina Faso, Senegal and Niger.',
              },
              {
                title: 'Technical Discipline',
                text: 'Professional execution grounded in precision, integrity and engineering competence.',
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto h-11 w-11 rounded bg-burgundy/20 border border-burgundy/30 flex items-center justify-center mb-4">
                  <span className="text-burgundy-300 text-sm">◆</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-metal-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-metal-200">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-charcoal">
            Ready to discuss your next project?
          </h2>
          <p className="mt-4 text-charcoal-600">
            Request a consultation or quotation. Our team will respond with the information you need.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/quotation"
              className="inline-flex items-center justify-center rounded bg-burgundy px-6 py-3.5 text-sm font-semibold text-white hover:bg-burgundy-600 transition-colors"
            >
              Request a Quotation
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded border border-charcoal/20 px-6 py-3.5 text-sm font-semibold text-charcoal hover:border-burgundy hover:text-burgundy transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
