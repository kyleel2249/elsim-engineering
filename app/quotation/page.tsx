import { QuotationForm } from '@/components/forms/QuotationForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Request a Quotation',
  description:
    'Request a consultation or quotation for electrical installation, solar power, maintenance or consulting services from ELSIM Engineering.',
};

export default function QuotationPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Request a Quotation
          </h1>
          <p className="mt-3 text-steel-300">
            Tell us about your project. We will review your enquiry and respond with next steps.
          </p>
        </div>
        <div className="rounded-xl border border-steel-800 bg-navy-900/50 p-6 sm:p-8">
          <QuotationForm />
        </div>
      </div>
    </div>
  );
}
