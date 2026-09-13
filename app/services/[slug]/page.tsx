import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getServiceBySlug, getAllServiceSlugs } from '@/lib/data/services';
import type { Metadata } from 'next';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  if (!service) return { title: 'Service Not Found' };
  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <nav className="text-sm text-steel-500 mb-8" aria-label="Breadcrumb">
          <Link href="/services" className="hover:text-energy-400">Services</Link>
          <span className="mx-2">/</span>
          <span className="text-steel-300">{service.title}</span>
        </nav>

        <h1 className="font-display text-4xl font-bold text-white">{service.title}</h1>
        <p className="mt-4 text-lg text-steel-300">{service.shortDescription}</p>

        <div className="mt-10 prose prose-invert max-w-none">
          <p className="text-steel-400 leading-relaxed">{service.description}</p>
        </div>

        {service.features.length > 0 && (
          <section className="mt-12">
            <h2 className="font-display text-2xl font-semibold text-white mb-4">Key Features</h2>
            <ul className="space-y-2">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-steel-300">
                  <span className="text-energy-400 mt-1">•</span>
                  {f}
                </li>
              ))}
            </ul>
          </section>
        )}

        {service.process.length > 0 && (
          <section className="mt-12">
            <h2 className="font-display text-2xl font-semibold text-white mb-4">Delivery Process</h2>
            <ol className="space-y-3">
              {service.process.map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-energy-500/10 text-sm font-medium text-energy-400">
                    {i + 1}
                  </span>
                  <span className="text-steel-300 pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </section>
        )}

        {service.safetyNotes.length > 0 && (
          <section className="mt-12 rounded-xl border border-steel-800 bg-navy-900/50 p-6">
            <h2 className="font-display text-xl font-semibold text-white mb-3">Safety Considerations</h2>
            <ul className="space-y-2">
              {service.safetyNotes.map((note) => (
                <li key={note} className="text-sm text-steel-400">• {note}</li>
              ))}
            </ul>
          </section>
        )}

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/quotation"
            className="inline-flex items-center justify-center rounded-md bg-energy-500 px-5 py-2.5 text-sm font-semibold text-navy-950 hover:bg-energy-400 transition-colors"
          >
            Request a Consultation
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-md border border-steel-600 px-5 py-2.5 text-sm font-medium text-steel-200 hover:bg-steel-800 transition-colors"
          >
            All Services
          </Link>
        </div>

        <p className="mt-10 text-xs text-steel-500">
          [Content provisional – requires verification against official ELSIM company profile]
        </p>
      </div>
    </div>
  );
}
