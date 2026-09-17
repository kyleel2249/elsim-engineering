import Link from 'next/link';
import Image from 'next/image';
import { company } from '@/lib/data/company';
import { media } from '@/lib/data/media';
import { cdnUrl } from '@/lib/cdn';
import { services } from '@/lib/data/services';

const COMPANY_LINKS = [
  { href: '/about', label: 'About ELSIM' },
  { href: '/projects', label: 'Projects' },
  { href: '/our-impact', label: 'Our Impact' },
  { href: '/safety', label: 'Safety & quality' },
  { href: '/maintenance', label: 'Maintenance support' },
  { href: '/contact', label: 'Contact' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#111111] text-white">
      <div className="h-1 bg-[#941A1D]" aria-hidden />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-4" aria-label="ELSIM Engineering Firm, home">
              <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md bg-white p-1.5">
                <Image
                  src={cdnUrl(media.logoMark.src)}
                  alt={media.logo.alt}
                  width={160}
                  height={160}
                  className="h-full w-full object-contain"
                />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-2xl font-bold tracking-tight text-white">
                  ELSIM ENGINEERING FIRM
                </span>
                <span className="mt-2 text-sm font-medium uppercase tracking-[0.14em] text-[#941A1D]">
                  Electrical &middot; Energy &middot; Industrial
                </span>
              </span>
            </Link>

            <p className="max-w-xs text-sm leading-relaxed text-white/70">{company.description}</p>
            <p className="text-xs text-white/50">{company.address.full}</p>
          </div>

          <nav aria-labelledby="footer-services">
            <h2 id="footer-services" className="mb-4 label-technical text-[#941A1D]">
              Services
            </h2>
            <ul className="space-y-2 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-white/70 transition-colors hover:text-[#941A1D]"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-company">
            <h2 id="footer-company" className="mb-4 label-technical text-[#941A1D]">
              Company
            </h2>
            <ul className="space-y-2 text-sm">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 transition-colors hover:text-[#941A1D]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="mb-4 label-technical text-[#941A1D]">Contact</h2>
            <ul className="space-y-2 text-sm">
              {company.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="text-white/70 transition-colors hover:text-[#941A1D]"
                  >
                    {phone}
                  </a>
                </li>
              ))}
              {company.email && (
                <li>
                  <a
                    href={`mailto:${company.email}`}
                    className="text-white/70 transition-colors hover:text-[#941A1D]"
                  >
                    {company.email}
                  </a>
                </li>
              )}
            </ul>

            <p className="mt-4 text-xs leading-relaxed text-white/50">
              Regions served: {company.regions.join(', ')}.
            </p>

            <Link
              href="/quotation"
              className="mt-5 inline-flex items-center justify-center gap-1.5 rounded bg-[#941A1D] px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition-all hover:brightness-110"
            >
              Request a consultation
              <span>→</span>
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/50">
            © {currentYear} {company.legalName}. All rights reserved.
            {' '}
            Developed and managed by{' '}
            <a
              href="https://cintex.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 transition-colors hover:text-[#941A1D] underline-offset-2 hover:underline"
            >
              cintexa.com
            </a>
          </p>
          <div className="flex gap-6 text-xs">
            <Link href="/privacy" className="text-white/50 transition-colors hover:text-[#941A1D]">
              Privacy policy
            </Link>
            <Link href="/terms" className="text-white/50 transition-colors hover:text-[#941A1D]">
              Terms of use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
