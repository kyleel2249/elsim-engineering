import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About ELSIM Engineering',
  description:
    'Learn about ELSIM Engineering – electrical installation and consulting firm in Ghana serving clients across West Africa.',
};

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-bold text-white">About ELSIM Engineering</h1>

        <div className="mt-8 space-y-6 text-steel-300 leading-relaxed">
          <p>
            ELSIM Engineering is a leading electrical installation and consulting firm in Ghana, offering a range of services including system design, maintenance, and solar power setup.
          </p>
          <p>
            The company emphasises safety, integrity and sustainability while aiming to exceed client expectations and contribute to community advancement. With a team of certified professionals, ELSIM Engineering has successfully completed various projects across West Africa.
          </p>
          <p className="text-sm text-steel-500 border-l-2 border-steel-700 pl-4">
            [Source: public summary only. Full company history, mission statement, vision, core values, leadership biographies, certifications and detailed geographic experience require the official company profile and management approval before publication.]
          </p>
        </div>

        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold text-white mb-4">What we stand for</h2>
          <ul className="space-y-3 text-steel-300">
            <li className="flex gap-3">
              <span className="text-energy-400">•</span>
              Safety-conscious delivery on every project
            </li>
            <li className="flex gap-3">
              <span className="text-energy-400">•</span>
              Integrity in client relationships and technical recommendations
            </li>
            <li className="flex gap-3">
              <span className="text-energy-400">•</span>
              Sustainable energy solutions where appropriate
            </li>
            <li className="flex gap-3">
              <span className="text-energy-400">•</span>
              Professional discipline and certified expertise
            </li>
          </ul>
        </section>

        <section className="mt-12 rounded-xl border border-steel-800 bg-navy-900/50 p-6">
          <h2 className="font-display text-xl font-semibold text-white mb-2">Leadership</h2>
          <p className="text-sm text-steel-400">
            Leadership profiles and photographs will be published only after authorised biographies and images are supplied by ELSIM management.
          </p>
        </section>

        <div className="mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-energy-500 px-5 py-2.5 text-sm font-semibold text-navy-950 hover:bg-energy-400 transition-colors"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}
