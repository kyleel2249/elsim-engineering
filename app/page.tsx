import Link from 'next/link';
import { HeroEnergyField } from '@/components/3d/HeroEnergyField';
import { services } from '@/lib/data/services';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <HeroEnergyField />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-medium tracking-widest text-energy-400 uppercase mb-4">
              Electrical Engineering • Ghana & West Africa
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Engineering Power.{' '}
              <span className="text-energy-400">Building Reliability.</span>
            </h1>
            <p className="mt-6 text-lg text-steel-300 max-w-xl leading-relaxed">
              Electrical engineering, energy and infrastructure solutions designed around the needs of businesses, industries, properties and institutions.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/quotation"
                className="inline-flex items-center justify-center rounded-md bg-energy-500 px-6 py-3 text-base font-semibold text-navy-950 shadow-lg hover:bg-energy-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-energy-500 transition-colors"
              >
                Request a Consultation
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-md border border-steel-600 bg-steel-900/50 px-6 py-3 text-base font-semibold text-white hover:bg-steel-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steel-400 transition-colors"
              >
                Explore Our Projects
              </Link>
            </div>
            <p className="mt-6 text-xs text-steel-500">
              [Provisional headline & copy – refine after official profile review]
            </p>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block">
          <div className="flex flex-col items-center gap-2 text-steel-500">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-energy-500/60 to-transparent" />
          </div>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-20 bg-navy-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold text-white">About ELSIM Engineering</h2>
            <p className="mt-4 text-steel-300 leading-relaxed">
              ELSIM Engineering is an electrical installation and consulting firm based in Ghana, offering system design, maintenance and solar power solutions. The company emphasises safety, integrity and sustainability while working with certified professionals across West Africa.
            </p>
            <p className="mt-3 text-sm text-steel-500">
              [Source: limited public summary. Full company history, mission, vision and leadership pending official profile and management approval.]
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex text-energy-400 font-medium hover:text-energy-300 transition-colors"
            >
              Learn more about us →
            </Link>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl font-bold text-white">Core Services</h2>
            <p className="mt-3 text-steel-400">
              Professional electrical and energy solutions tailored to commercial, industrial and institutional clients.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative rounded-xl border border-steel-800 bg-navy-900/60 p-6 hover:border-energy-500/40 hover:bg-navy-900 transition-all duration-300"
              >
                <div className="h-10 w-10 rounded-lg bg-energy-500/10 border border-energy-500/20 flex items-center justify-center mb-4 group-hover:bg-energy-500/20 transition-colors">
                  <span className="text-energy-400 text-lg font-bold">⚡</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-white group-hover:text-energy-400 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-steel-400 leading-relaxed">
                  {service.shortDescription}
                </p>
                <span className="mt-4 inline-block text-sm text-energy-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  View details →
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-md border border-steel-600 px-5 py-2.5 text-sm font-medium text-steel-200 hover:bg-steel-800 transition-colors"
            >
              View all services
            </Link>
          </div>
        </div>
      </section>

      {/* Projects placeholder */}
      <section className="py-20 bg-navy-900/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display text-3xl font-bold text-white">Selected Projects</h2>
            <p className="mt-3 text-steel-400">
              Real project photography and case studies will appear here once approved assets are provided by ELSIM management.
            </p>
          </div>
          <div className="rounded-xl border border-dashed border-steel-700 bg-navy-950/50 p-12 text-center">
            <p className="text-steel-500 text-sm">
              [No authentic project images available from source document]
              <br />
              Portfolio gallery ready for approved photographs and verified project descriptions.
            </p>
            <Link
              href="/projects"
              className="mt-6 inline-flex text-energy-400 text-sm font-medium hover:text-energy-300"
            >
              View projects page →
            </Link>
          </div>
        </div>
      </section>

      {/* Why ELSIM */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white text-center mb-12">
            Why Work With ELSIM
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Safety First',
                text: 'Emphasis on safety, integrity and disciplined delivery on every engagement.',
              },
              {
                title: 'Certified Professionals',
                text: 'Team of certified professionals delivering electrical and energy solutions.',
              },
              {
                title: 'West Africa Experience',
                text: 'Project experience across Ghana and the wider West African region.',
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto h-12 w-12 rounded-full bg-energy-500/10 border border-energy-500/30 flex items-center justify-center mb-4">
                  <span className="text-energy-400">✓</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-steel-400">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-steel-500">
            [Claims based solely on public summary – further evidence pending]
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-navy-900 to-navy-950">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-white">
            Ready to discuss your next project?
          </h2>
          <p className="mt-4 text-steel-300">
            Request a consultation or quotation. Our team will respond with the information you need.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/quotation"
              className="inline-flex items-center justify-center rounded-md bg-energy-500 px-6 py-3 text-base font-semibold text-navy-950 hover:bg-energy-400 transition-colors"
            >
              Request a Quotation
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-steel-600 px-6 py-3 text-base font-semibold text-white hover:bg-steel-800 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
