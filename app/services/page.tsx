import Link from 'next/link';
import { services } from '@/lib/data/services';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Electrical installations, solar power solutions, maintenance, power distribution and consulting services from ELSIM Engineering in Ghana and West Africa.',
};

export default function ServicesPage() {
  return (
    <div className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] text-burgundy uppercase mb-3">
            Capabilities
          </p>
          <h1 className="font-display text-4xl font-bold text-charcoal">Our Services</h1>
          <p className="mt-4 text-lg text-charcoal-600">
            Professional electrical engineering and energy solutions for commercial, industrial and institutional clients.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group rounded border border-metal-200 bg-metal-50 p-6 hover:border-burgundy/40 hover:shadow-md transition-all"
            >
              <div className="h-9 w-9 rounded bg-burgundy/10 flex items-center justify-center mb-4 group-hover:bg-burgundy/15 transition-colors">
                <span className="text-burgundy text-sm font-bold">◆</span>
              </div>
              <h2 className="font-display text-xl font-semibold text-charcoal group-hover:text-burgundy transition-colors">
                {service.title}
              </h2>
              <p className="mt-3 text-sm text-charcoal-600 leading-relaxed">
                {service.shortDescription}
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-burgundy">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
