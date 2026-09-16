import type { Metadata } from 'next';
import { QuotationForm } from '@/components/forms/QuotationForm';
import { PageHeader } from '@/components/layout/PageHeader';
import { company } from '@/lib/data/company';

export const metadata: Metadata = {
  title: 'Request a Quotation',
  description:
    'Request a consultation or quotation for electrical installation, solar power, maintenance or consulting services from ELSIM Engineering.',
};

export default function QuotationPage() {
  return (
    <div className="py-16 sm:py-24" style={{ backgroundColor: 'var(--theme-bg)' }}>
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <PageHeader
          eyebrow="Business development"
          title="Request a project consultation"
          lede="Tell us about the project. We review every enquiry and respond with next steps and, where we can, an indication of cost."
        />

        <div
          className="mt-10 rounded border p-6 sm:p-8"
          style={{ borderColor: 'var(--theme-border)', backgroundColor: 'var(--theme-bg-muted)' }}
        >
          <QuotationForm />
        </div>

        <p className="mt-6 text-sm" style={{ color: 'var(--theme-text-subtle)' }}>
          In a hurry? Call {company.phones[0]} and ask for business development.
        </p>
      </div>
    </div>
  );
}
