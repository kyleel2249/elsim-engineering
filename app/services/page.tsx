import Link from 'next/link';
import { services } from '@/lib/data/services';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Electrical installations, solar power solutions, maintenance, power distribution and consulting services from ELSIM Engineering in Ghana.',
};

export default function ServicesPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h1 className="font-display text-4xl font-bold text-white">Our Services</h1>
          <p className="mt-4 text-lg text-steel-300">
            Professional electrical engineering and energy solutions. All service descriptions are provisional pending verification against the official ELSIM company profile.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group rounded-xl border border-steel-800 bg-navy-900/60 p-6 hover:border-energy-500/40 transition-all"
            >
              <h2 className="font-display text-xl font-semibold text-white group-hover:text-energy-400 transition-colors">
                {service.title}
              </h2>
              <p className="mt-3 text-sm text-steel-400 leading-relaxed">
                {service.shortDescription}
              </p>
              <span className="mt-4 inline-block text-sm text-energy-500">Learn more →</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
