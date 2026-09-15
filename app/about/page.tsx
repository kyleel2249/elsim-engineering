import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { company } from '@/lib/data/company';
import { media } from '@/lib/data/media';

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
            Operating from Accra, Ghana, with verified project experience across Ghana, Togo, Côte d'Ivoire, Burkina Faso, Senegal and Niger.
          </p>
        </div>

        {/* Full photo — no crop */}
        <figure className="mt-10 rounded border border-metal-200 bg-metal-50 overflow-hidden">
          <div className="p-2 sm:p-4 flex items-center justify-center bg-metal-100">
            <Image
              src={media.photography.technicianPanelWork}
              alt="ELSIM technician working on an electrical control panel"
              width={1200}
              height={800}
              className="w-full h-auto max-h-[75vh] object-contain"
              sizes="(max-width: 768px) 100vw, 896px"
              priority
            />
          </div>
        </figure>

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

        <section className="mt-14">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-2">Our Team</h2>
          <p className="text-sm text-charcoal-500 mb-6">Leadership of ELSIM Engineering</p>
          <figure className="rounded border border-metal-200 bg-white overflow-hidden">
            <div className="p-2 sm:p-4 flex items-center justify-center bg-metal-50">
              <Image
                src={media.leadership.ourTeam}
                alt="ELSIM Engineering leadership: Ing. Simon Sandy Kununya (CEO), Ella Ankah (General Manager), Ing. Teye Amos Agudey (Engineer/Project Manager), Stephen Doe Agbo (Chief Accounts Officer)"
                width={1200}
                height={900}
                className="w-full h-auto max-h-[80vh] object-contain"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>
          </figure>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 text-sm">
            {company.leadership.map((person) => (
              <li key={person.name} className="rounded border border-metal-200 px-4 py-3">
                <span className="font-semibold text-charcoal">{person.name}</span>
                <span className="block text-burgundy text-xs uppercase tracking-wide mt-0.5">
                  {person.role}
                </span>
              </li>
            ))}
          </ul>
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
