import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-steel-800 bg-navy-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-energy-500/10 border border-energy-500/30">
                <span className="font-display text-base font-bold text-energy-400">E</span>
              </div>
              <div>
                <span className="font-display text-base font-semibold text-white">ELSIM</span>
                <span className="block text-xs text-steel-400 -mt-0.5">Engineering</span>
              </div>
            </Link>
            <p className="text-sm text-steel-400 max-w-xs">
              Electrical engineering, energy and infrastructure solutions for businesses, industries, properties and institutions across Ghana and West Africa.
            </p>
            <p className="text-xs text-steel-500">
              [Provisional site – official logo, colors and contact details pending]
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/electrical-installations" className="text-steel-400 hover:text-energy-400 transition-colors">
                  Electrical Installations
                </Link>
              </li>
              <li>
                <Link href="/services/solar-power-solutions" className="text-steel-400 hover:text-energy-400 transition-colors">
                  Solar Power Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/electrical-maintenance" className="text-steel-400 hover:text-energy-400 transition-colors">
                  Inspection & Maintenance
                </Link>
              </li>
              <li>
                <Link href="/services/power-distribution" className="text-steel-400 hover:text-energy-400 transition-colors">
                  Power Distribution
                </Link>
              </li>
              <li>
                <Link href="/services/electrical-consulting" className="text-steel-400 hover:text-energy-400 transition-colors">
                  Consulting & Audits
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-steel-400 hover:text-energy-400 transition-colors">
                  About ELSIM
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-steel-400 hover:text-energy-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/safety" className="text-steel-400 hover:text-energy-400 transition-colors">
                  Safety & Quality
                </Link>
              </li>
              <li>
                <Link href="/maintenance" className="text-steel-400 hover:text-energy-400 transition-colors">
                  Maintenance Support
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-steel-400 hover:text-energy-400 transition-colors">
                  Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Get in Touch</h3>
            <p className="text-sm text-steel-400 mb-4">
              Contact details and official channels will be published once verified from the company profile.
            </p>
            <Link
              href="/quotation"
              className="inline-flex items-center justify-center rounded-md bg-energy-500 px-4 py-2 text-sm font-semibold text-navy-950 hover:bg-energy-400 transition-colors"
            >
              Request a Consultation
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-steel-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-steel-500">
            © {currentYear} ELSIM Engineering. All rights reserved. [Provisional website]
          </p>
          <div className="flex gap-6 text-xs text-steel-500">
            <Link href="/privacy" className="hover:text-steel-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-steel-300">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
