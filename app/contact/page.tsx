import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Reveal } from '@/components/motion/Reveal';
import { company } from '@/lib/data/company';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact ELSIM Engineering — Oyarifa Teiman, Accra, Ghana. Electrical, solar, maintenance and consulting enquiries.',
};

export default function ContactPage() {
  const mapsQuery = encodeURIComponent(company.address.full);

  return (
    <div className="py-16 sm:py-24" style={{ backgroundColor: 'var(--theme-bg)' }}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <PageHeader
          eyebrow="Contact"
          title="Get in touch"
          lede="Reach ELSIM Engineering for project consultations, quotations and technical enquiries."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <Reveal>
            <ContactCard icon={<MapPin className="h-5 w-5" aria-hidden />} label="Address">
              <p style={{ color: 'var(--theme-text)' }}>{company.address.full}</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-2 inline-block text-sm font-medium text-accent"
              >
                Open in Maps
              </a>
            </ContactCard>
          </Reveal>

          <Reveal delay={70}>
            <ContactCard icon={<Phone className="h-5 w-5" aria-hidden />} label="Telephone">
              <ul className="space-y-1.5">
                {company.phones.map((phone) => (
                  <li key={phone}>
                    <a
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      className="link-underline font-medium"
                      style={{ color: 'var(--theme-text)' }}
                    >
                      {phone}
                    </a>
                  </li>
                ))}
              </ul>
            </ContactCard>
          </Reveal>

          <Reveal delay={140}>
            <ContactCard icon={<Mail className="h-5 w-5" aria-hidden />} label="Email">
              {company.email ? (
                <a
                  href={`mailto:${company.email}`}
                  className="link-underline font-medium"
                  style={{ color: 'var(--theme-text)' }}
                >
                  {company.email}
                </a>
              ) : (
                <p className="text-sm" style={{ color: 'var(--theme-text-muted)' }}>
                  Our published email address is being confirmed against company records. Use the
                  quotation form or call us and we will reply from the correct address.
                </p>
              )}
            </ContactCard>
          </Reveal>

          <Reveal delay={210}>
            <ContactCard icon={<Clock className="h-5 w-5" aria-hidden />} label="Response">
              <p className="text-sm" style={{ color: 'var(--theme-text-muted)' }}>
                Enquiries sent through the quotation form reach the team directly and are answered in
                order of receipt. For an active site issue, call — it is faster.
              </p>
            </ContactCard>
          </Reveal>
        </div>

        <Reveal>
          <section
            className="mt-12 rounded border p-6 sm:p-8"
            style={{ borderColor: 'var(--theme-border)', backgroundColor: 'var(--theme-bg-muted)' }}
          >
            <h2 className="font-display text-xl font-semibold" style={{ color: 'var(--theme-text)' }}>
              Prefer a structured enquiry?
            </h2>
            <p className="mt-2 text-sm" style={{ color: 'var(--theme-text-muted)' }}>
              The quotation form captures the scope, location and timeline we need to give you a
              useful answer the first time.
            </p>
            <Link
              href="/quotation"
              className="mt-5 inline-flex items-center rounded bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent transition-all hover:brightness-110"
            >
              Request a quotation
            </Link>
          </section>
        </Reveal>
      </div>
    </div>
  );
}

function ContactCard({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="lift h-full rounded border p-6"
      style={{ borderColor: 'var(--theme-border)', backgroundColor: 'var(--theme-surface)' }}
    >
      <div className="flex items-center gap-2.5 text-accent">
        {icon}
        <h2 className="text-xs font-semibold uppercase tracking-widest">{label}</h2>
      </div>
      <div className="mt-3">{children}</div>
    </div>
  );
}
