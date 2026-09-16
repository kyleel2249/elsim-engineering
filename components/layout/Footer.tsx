import Link from 'next/link';
import Image from 'next/image';
import { company } from '@/lib/data/company';
import { media } from '@/lib/data/media';
import { cdnUrl } from '@/lib/cdn';
import { services } from '@/lib/data/services';

const COMPANY_LINKS = [
  { href: '/about', label: 'About ELSIM' },
  { href: '/projects', label: 'Projects' },
  { href: '/safety', label: 'Safety & quality' },
  { href: '/maintenance', label: 'Maintenance support' },
  { href: '/contact', label: 'Contact' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white">
      {/* Gold datum edge, matching the logo's accent */}
      <div className="h-1 bg-gradient-to-r from-gold via-gold-300 to-gold" aria-hidden />

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3" aria-label="ELSIM Engineering, home">
              <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded bg-white p-1">
                <Image
                  src={cdnUrl(media.logoMark.src)}
                  alt={media.logo.alt}
                  width={96}
                  height={96}
                  className="h-full w-full object-contain"
                />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-base font-semibold text-white">ELSIM</span>
                <span className="mt-1 text-[10px] uppercase tracking-[0.18em] text-navy-300">
                  Engineering Firm
                </span>
              </span>
            </Link>

            <p className="max-w-xs text-sm leading-relaxed text-navy-200">{company.description}</p>
            <p className="text-xs text-navy-300">{company.address.full}</p>
          </div>

          <nav aria-labelledby="footer-services">
            <h2
              id="footer-services"
              className="mb-4 text-xs font-semibold uppercase tracking-widest text-gold"
            >
              Services
            </h2>
            <ul className="space-y-2 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-navy-200 transition-colors hover:text-gold"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-company">
            <h2
              id="footer-company"
              className="mb-4 text-xs font-semibold uppercase tracking-widest text-gold"
            >
              Company
            </h2>
            <ul className="space-y-2 text-sm">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-navy-200 transition-colors hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gold">Contact</h2>
            <ul className="space-y-2 text-sm">
              {company.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="text-navy-200 transition-colors hover:text-gold"
                  >
                    {phone}
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-4 text-xs leading-relaxed text-navy-300">
              Regions served: {company.regions.join(', ')}.
            </p>

            <Link
              href="/quotation"
              className="mt-5 inline-flex items-center justify-center rounded bg-gold px-4 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:bg-gold-400"
            >
              Request a consultation
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-navy-700 pt-8 sm:flex-row">
          <p className="text-xs text-navy-300">
            © {currentYear} {company.legalName}. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs">
            <Link href="/privacy" className="text-navy-300 transition-colors hover:text-gold">
              Privacy policy
            </Link>
            <Link href="/terms" className="text-navy-300 transition-colors hover:text-gold">
              Terms of use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
