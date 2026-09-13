import type { Metadata } from 'next';
import Link from 'next/link';
import { company } from '@/lib/data/company';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact ELSIM Engineering – Oyarifa Teiman, Accra, Ghana. Electrical, solar and consulting enquiries.',
};

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold tracking-[0.2em] text-burgundy uppercase mb-3">
          Contact
        </p>
        <h1 className="font-display text-4xl font-bold text-charcoal">Get in Touch</h1>
        <p className="mt-4 text-lg text-charcoal-600">
          Reach ELSIM Engineering for project consultations, quotations and technical enquiries.
        </p>

        <div className="mt-10 rounded border border-metal-200 bg-metal-50 p-8 space-y-6">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-charcoal-500">
              Address
            </h2>
            <p className="mt-1 text-charcoal font-medium">{company.address.full}</p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-charcoal-500">
              Telephone
            </h2>
            <ul className="mt-1 space-y-1">
              {company.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="text-charcoal font-medium hover:text-burgundy transition-colors"
                  >
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-charcoal-500">
              Email
            </h2>
            <p className="mt-1 text-charcoal-500 text-sm">
              Official email address pending verification from company records.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-charcoal-600 mb-4">Prefer a structured project enquiry?</p>
          <Link
            href="/quotation"
            className="inline-flex items-center justify-center rounded bg-burgundy px-6 py-3 text-sm font-semibold text-white hover:bg-burgundy-600 transition-colors"
          >
            Request a Quotation
          </Link>
        </div>
      </div>
    </div>
  );
}
