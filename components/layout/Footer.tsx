import Link from 'next/link';
import { company } from '@/lib/data/company';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-metal-300 bg-charcoal text-white">
      {/* Burgundy directional line */}
      <div className="h-1 bg-gradient-to-r from-burgundy via-burgundy-400 to-burgundy" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded bg-burgundy text-white">
                <span className="font-display text-base font-bold">E</span>
              </div>
              <div>
                <span className="font-display text-base font-semibold text-white">ELSIM</span>
                <span className="block text-[10px] uppercase tracking-widest text-metal-400 -mt-0.5">
                  Engineering
                </span>
              </div>
            </Link>
            <p className="text-sm text-metal-400 max-w-xs leading-relaxed">
              {company.description}
            </p>
            <p className="text-xs text-metal-500">
              {company.address.full}
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-metal-300 mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/electrical-installations" className="text-metal-400 hover:text-burgundy-300 transition-colors">
                  Electrical Installations
                </Link>
              </li>
              <li>
                <Link href="/services/solar-power-solutions" className="text-metal-400 hover:text-burgundy-300 transition-colors">
                  Solar Power Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/electrical-maintenance" className="text-metal-400 hover:text-burgundy-300 transition-colors">
                  Inspection & Maintenance
                </Link>
              </li>
              <li>
                <Link href="/services/power-distribution" className="text-metal-400 hover:text-burgundy-300 transition-colors">
                  Power Distribution
                </Link>
              </li>
              <li>
                <Link href="/services/electrical-consulting" className="text-metal-400 hover:text-burgundy-300 transition-colors">
                  Consulting & Audits
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-metal-300 mb-4">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-metal-400 hover:text-burgundy-300 transition-colors">
                  About ELSIM
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-metal-400 hover:text-burgundy-300 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/safety" className="text-metal-400 hover:text-burgundy-300 transition-colors">
                  Safety & Quality
                </Link>
              </li>
              <li>
                <Link href="/maintenance" className="text-metal-400 hover:text-burgundy-300 transition-colors">
                  Maintenance Support
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-metal-400 hover:text-burgundy-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-metal-300 mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-metal-400">
              {company.phones.map((phone) => (
                <li key={phone}>
                  <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-burgundy-300 transition-colors">
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
            <Link
              href="/quotation"
              className="mt-5 inline-flex items-center justify-center rounded bg-burgundy px-4 py-2 text-sm font-semibold text-white hover:bg-burgundy-600 transition-colors"
            >
              Request a Consultation
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-charcoal-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-metal-500">
            © {currentYear} ELSIM Engineering. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-metal-500">
            <Link href="/privacy" className="hover:text-metal-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-metal-300 transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
