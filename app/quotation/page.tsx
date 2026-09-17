import type { Metadata } from 'next';
import { QuotationForm } from '@/components/forms/QuotationForm';
import { PageHeader } from '@/components/layout/PageHeader';
import { company } from '@/lib/data/company';

export const metadata: Metadata = {
  title: 'Request a quotation',
  description:
    'Request a project quotation from ELSIM Engineering for electrical, solar, maintenance or consulting work in Ghana.',
};

export default function QuotationPage() {
  return (
    <div className="py-16 sm:py-24" style={{ backgroundColor: 'var(--theme-bg)' }}>
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <PageHeader
          eyebrow="Quotation"
          title="Tell us about your project"
          lede="Share the essentials and we will respond with scope guidance and next steps. Enquiries are sent to our WhatsApp business line."
        />

        <div className="mt-10">
          <QuotationForm />
        </div>

        <p className="mt-6 text-sm" style={{ color: 'var(--theme-text-subtle)' }}>
          In a hurry? Call {company.phones[0].display} and ask for business development.
        </p>
      </div>
    </div>
  );
}
