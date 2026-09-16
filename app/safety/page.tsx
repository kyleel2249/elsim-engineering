import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/layout/PageHeader';
import { Reveal } from '@/components/motion/Reveal';
import { company } from '@/lib/data/company';

export const metadata: Metadata = {
  title: 'Safety & Quality',
  description:
    'How ELSIM Engineering manages electrical safety, risk assessment, isolation procedures and quality assurance on sites across Ghana and West Africa.',
};

const PRACTICES = [
  {
    title: 'Risk assessment before works begin',
    body: 'Every scope starts with a site-specific assessment covering electrical hazards, working at height, confined spaces and third-party exposure. Findings drive the method statement, not the other way round.',
  },
  {
    title: 'Isolation and lock-out / tag-out',
    body: 'Circuits are isolated, proven dead and locked off before work starts. Tags identify the person holding the isolation, and only that person removes it.',
  },
  {
    title: 'Competent persons only',
    body: 'Live and high-voltage tasks are carried out by qualified personnel with the authorisation appropriate to the system being worked on. Supervision is matched to the risk, not the headcount.',
  },
  {
    title: 'Personal protective equipment',
    body: 'Arc-rated clothing, insulated tools, eye protection and high-visibility wear are issued for the task and inspected before use. Damaged equipment is withdrawn, not worked around.',
  },
  {
    title: 'Testing, commissioning and records',
    body: 'Installations are tested and commissioned against the design before handover, with results recorded so the client has evidence of the condition they are accepting.',
  },
  {
    title: 'Incident reporting and learning',
    body: 'Near misses are reported and reviewed alongside incidents. The point is to change the method that allowed it, not to close a form.',
  },
];

export default function SafetyPage() {
  return (
    <div className="py-16 sm:py-24" style={{ backgroundColor: 'var(--theme-bg)' }}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <PageHeader
          eyebrow="Safety and quality"
          title="Safety is the method, not the paperwork"
          lede="Electrical work carries consequences that do not negotiate. These are the practices ELSIM teams apply on every site, from a domestic service line to an 800KVA transformer installation."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded border sm:grid-cols-2" style={{ borderColor: 'var(--theme-border)', backgroundColor: 'var(--theme-border)' }}>
          {PRACTICES.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <article className="h-full p-6" style={{ backgroundColor: 'var(--theme-surface)' }}>
                <h2 className="font-display text-base font-semibold" style={{ color: 'var(--theme-text)' }}>
                  {item.title}
                </h2>
                <p className="mt-2.5 text-sm leading-relaxed" style={{ color: 'var(--theme-text-muted)' }}>
                  {item.body}
                </p>
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
              Standards and certification
            </h2>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--theme-text-muted)' }}>
              ELSIM works to applicable Ghanaian and international electrical standards. Specific
              certifications and accreditation numbers are confirmed against company records before
              publication here — ask us directly and we will provide current documentation for your
              tender or pre-qualification pack.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center rounded bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent transition-all hover:brightness-110"
              >
                Request our documentation
              </Link>
              <Link
                href="/maintenance"
                className="inline-flex items-center rounded border px-5 py-2.5 text-sm font-medium transition-colors"
                style={{ borderColor: 'var(--theme-border)', color: 'var(--theme-text)' }}
              >
                Maintenance support
              </Link>
            </div>
          </section>
        </Reveal>

        <p className="mt-10 text-sm" style={{ color: 'var(--theme-text-subtle)' }}>
          Reporting a hazard on an active ELSIM site? Call {company.phones[0]}.
        </p>
      </div>
    </div>
  );
}
