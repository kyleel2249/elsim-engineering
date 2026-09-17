import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Linkedin, Facebook, MessageCircle } from 'lucide-react';
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
              <ul className="space-y-4">
                {company.phones.map((phone) => (
                  <li key={phone.tel} className="space-y-1">
                    <a
                      href={`tel:${phone.tel}`}
                      className="link-underline inline-flex items-center gap-2 font-medium"
                      style={{ color: 'var(--theme-text)' }}
                    >
                      <Phone className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                      {phone.display}
                    </a>
                    <span className="block text-xs" style={{ color: 'var(--theme-text-subtle)' }}>
                      {phone.whatsapp ? 'Calls & WhatsApp' : 'Calls'}
                    </span>
                    {phone.whatsapp && (
                      <a
                        href={`https://wa.me/${phone.tel.replace('+', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent"
                      >
                        <MessageCircle className="h-4 w-4 shrink-0" aria-hidden />
                        Chat on WhatsApp
                      </a>
                    )}
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
                  className="link-underline inline-flex items-center gap-2 font-medium"
                  style={{ color: 'var(--theme-text)' }}
                >
                  <Mail className="h-4 w-4 shrink-0 text-accent" aria-hidden />
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

          <Reveal delay={280} className="sm:col-span-2">
            <ContactCard icon={<Linkedin className="h-5 w-5" aria-hidden />} label="Social">
              <ul className="flex flex-wrap gap-3">
                <li>
                  <a
                    href={company.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded border px-3 py-2 text-sm font-medium transition-colors hover:border-accent"
                    style={{ borderColor: 'var(--theme-border)', color: 'var(--theme-text)' }}
                  >
                    <Linkedin className="h-4 w-4" aria-hidden />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={company.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded border px-3 py-2 text-sm font-medium transition-colors hover:border-accent"
                    style={{ borderColor: 'var(--theme-border)', color: 'var(--theme-text)' }}
                  >
                    <Facebook className="h-4 w-4" aria-hidden />
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href={company.socials.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded border px-3 py-2 text-sm font-medium transition-colors hover:border-accent"
                    style={{ borderColor: 'var(--theme-border)', color: 'var(--theme-text)' }}
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .56.04.82.12V9.01a6.27 6.27 0 0 0-.82-.05A6.34 6.34 0 0 0 3.16 15.3a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73a8.19 8.19 0 0 0 4.76 1.52V6.79a4.85 4.85 0 0 1-1.01-.1z" />
                    </svg>
                    TikTok
                  </a>
                </li>
              </ul>
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
              className="mt-5 inline-flex items-center justify-center gap-1.5 rounded bg-energy px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-on-energy transition-all hover:brightness-105"
            >
              Request a quotation
              <span>→</span>
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
      className="rounded border p-5"
      style={{ borderColor: 'var(--theme-border)', backgroundColor: 'var(--theme-surface)' }}
    >
      <div className="mb-3 flex items-center gap-2">
        <span className="text-accent" aria-hidden>
          {icon}
        </span>
        <h2 className="label-technical text-accent">{label}</h2>
      </div>
      {children}
    </div>
  );
}
