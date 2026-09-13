import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact ELSIM Engineering for electrical, solar and consulting enquiries in Ghana.',
};

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-bold text-white">Contact</h1>
        <p className="mt-4 text-lg text-steel-300">
          Official address, telephone numbers, email and WhatsApp Business details will be published once verified from the company profile.
        </p>

        <div className="mt-10 rounded-xl border border-steel-800 bg-navy-900/50 p-8 space-y-6">
          <div>
            <h2 className="text-sm font-semibold text-steel-400 uppercase tracking-wider">Address</h2>
            <p className="mt-1 text-steel-300">[Pending verification]</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-steel-400 uppercase tracking-wider">Telephone</h2>
            <p className="mt-1 text-steel-300">[Pending verification]</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-steel-400 uppercase tracking-wider">Email</h2>
            <p className="mt-1 text-steel-300">[Pending verification]</p>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-steel-300 mb-4">
            Prefer to send a structured enquiry?
          </p>
          <Link
            href="/quotation"
            className="inline-flex items-center justify-center rounded-md bg-energy-500 px-6 py-3 text-base font-semibold text-navy-950 hover:bg-energy-400 transition-colors"
          >
            Request a Quotation
          </Link>
        </div>
      </div>
    </div>
  );
}
