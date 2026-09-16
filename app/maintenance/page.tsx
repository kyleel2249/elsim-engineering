import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/layout/PageHeader';
import { Reveal } from '@/components/motion/Reveal';
import { company } from '@/lib/data/company';

export const metadata: Metadata = {
  title: 'Maintenance Support',
  description:
    'Planned preventive maintenance, condition reporting, fault finding and reactive electrical support from ELSIM Engineering across Ghana and West Africa.',
};

const TIERS = [
  {
    name: 'Condition assessment',
    summary: 'A one-off survey of an existing installation.',
    includes: [
      'Visual and instrument inspection of boards and distribution',
      'Load and thermal review where equipment allows',
      'Written condition report with prioritised findings',
      'Budget guidance for remedial works',
    ],
  },
  {
    name: 'Planned maintenance',
    summary: 'A scheduled programme built around your operating calendar.',
    includes: [
      'Maintenance schedule agreed against production downtime',
      'Recurring inspection, cleaning and torque checks',
      'Consumable and spares tracking',
      'Trend reporting between visits',
    ],
  },
  {
    name: 'Reactive support',
    summary: 'Fault finding and repair when something has already failed.',
    includes: [
      'Fault diagnosis on distribution and control systems',
      'Temporary supply arrangements where practical',
      'Repair, replace and re-commission',
      'Root-cause note so the same fault is not repeated',
    ],
  },
];

export default function MaintenancePage() {
  return (
    <div className="py-16 sm:py-24" style={{ backgroundColor: 'var(--theme-bg)' }}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <PageHeader
          eyebrow="Maintenance support"
          title="Keep the installation running, not just installed"
          lede="Most electrical failures announce themselves well before they stop production. ELSIM maintenance support exists to find them at the inspection rather than at the shutdown."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {TIERS.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 80}>
              <article
                className="lift flex h-full flex-col rounded border p-6"
                style={{ borderColor: 'var(--theme-border)', backgroundColor: 'var(--theme-surface)' }}
              >
                <h2 className="font-display text-lg font-semibold" style={{ color: 'var(--theme-text)' }}>
                  {tier.name}
                </h2>
                <p className="mt-2 text-sm" style={{ color: 'var(--theme-text-muted)' }}>
                  {tier.summary}
                </p>
                <ul className="mt-5 space-y-2.5 text-sm" style={{ color: 'var(--theme-text-muted)' }}>
                  {tier.includes.map((line) => (
                    <li key={line} className="flex gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                      {line}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <section
            className="mt-14 rounded border p-6 sm:p-8"
            style={{ borderColor: 'var(--theme-border)', backgroundColor: 'var(--theme-bg-muted)' }}
          >
            <h2 className="font-display text-xl font-semibold" style={{ color: 'var(--theme-text)' }}>
              Response times and cover
            </h2>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--theme-text-muted)' }}>
              Response commitments depend on site location, system criticality and the cover level
              agreed in your contract. Tell us where the installation is and what it supports, and we
              will confirm what we can commit to in writing rather than in general terms.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/quotation"
                className="inline-flex items-center rounded bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent transition-all hover:brightness-110"
              >
                Discuss a maintenance contract
              </Link>
              <a
                href={`tel:${company.phones[0].replace(/\s/g, '')}`}
                className="text-sm font-medium text-accent"
              >
                Or call {company.phones[0]}
              </a>
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  );
}
