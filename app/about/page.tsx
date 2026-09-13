import type { Metadata } from 'next';
import Link from 'next/link';
import { company } from '@/lib/data/company';

export const metadata: Metadata = {
  title: 'About ELSIM Engineering',
  description:
    'ELSIM Engineering – vision, mission, values and leadership. Electrical engineering solutions across Ghana and West Africa.',
};

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold tracking-[0.2em] text-burgundy uppercase mb-3">
          Company
        </p>
        <h1 className="font-display text-4xl font-bold text-charcoal">About ELSIM Engineering</h1>

        <div className="mt-8 space-y-5 text-charcoal-600 leading-relaxed">
          <p>{company.description}</p>
          <p>
            Based in Accra, Ghana, with verified project experience across Ghana, Togo, Côte d'Ivoire, Burkina Faso, Senegal and Niger.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <div className="rounded border border-metal-200 bg-metal-50 p-6">
            <h2 className="font-display text-lg font-semibold text-burgundy uppercase tracking-wide">
              Vision
            </h2>
            <p className="mt-3 text-sm text-charcoal-600 leading-relaxed">{company.vision}</p>
          </div>
          <div className="rounded border border-metal-200 bg-metal-50 p-6">
            <h2 className="font-display text-lg font-semibold text-burgundy uppercase tracking-wide">
              Mission
            </h2>
            <p className="mt-3 text-sm text-charcoal-600 leading-relaxed">{company.mission}</p>
          </div>
        </div>

        {/* Core Values */}
        <section className="mt-14">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Core Values</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {company.values.map((v) => (
              <div
                key={v.id}
                className="rounded border border-metal-200 p-5 hover:border-burgundy/30 transition-colors"
              >
                <h3 className="font-display text-sm font-semibold text-burgundy uppercase tracking-wide">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm text-charcoal-600">{v.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership */}
        <section className="mt-14">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Leadership</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {company.leadership.map((person) => (
              <div
                key={person.name}
                className="rounded border border-metal-200 bg-white p-5 flex gap-4 items-start"
              >
                <div className="h-12 w-12 shrink-0 rounded bg-burgundy/10 flex items-center justify-center">
                  <span className="text-burgundy font-display font-bold text-sm">
                    {person.name
                      .split(' ')
                      .filter((n) => !n.startsWith('Ing.'))
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join('')}
                  </span>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-charcoal">{person.name}</h3>
                  <p className="text-sm text-burgundy mt-0.5">{person.role}</p>
                  {person.bio ? (
                    <p className="mt-2 text-sm text-charcoal-600">{person.bio}</p>
                  ) : (
                    <p className="mt-2 text-xs text-charcoal-400">
                      Biography pending approved content.
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-14">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded bg-burgundy px-5 py-2.5 text-sm font-semibold text-white hover:bg-burgundy-600 transition-colors"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}
