import { QuotationForm } from '@/components/forms/QuotationForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Request a Quotation',
  description:
    'Request a consultation or quotation for electrical installation, solar power, maintenance or consulting services from ELSIM Engineering.',
};

export default function QuotationPage() {
  return (
    <div className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-[0.2em] text-burgundy uppercase mb-3">
            Business Development
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-charcoal">
            Request a Project Consultation
          </h1>
          <p className="mt-3 text-charcoal-600">
            Tell us about your project. We will review your enquiry and respond with next steps.
          </p>
        </div>
        <div className="rounded border border-metal-200 bg-metal-50 p-6 sm:p-8">
          <QuotationForm />
        </div>
      </div>
    </div>
  );
}
