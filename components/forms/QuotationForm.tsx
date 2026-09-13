'use client';

import { useState, FormEvent } from 'react';
import { services } from '@/lib/data/services';

interface FormState {
  name: string;
  company: string;
  email: string;
  telephone: string;
  projectType: string;
  serviceRequired: string;
  projectLocation: string;
  projectDescription: string;
  estimatedTimeline: string;
  budgetRange: string;
  consent: boolean;
}

const initialState: FormState = {
  name: '',
  company: '',
  email: '',
  telephone: '',
  projectType: '',
  serviceRequired: '',
  projectLocation: '',
  projectDescription: '',
  estimatedTimeline: '',
  budgetRange: '',
  consent: false,
};

export function QuotationForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [step, setStep] = useState(1);

  function update(field: keyof FormState, value: string | boolean) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function validateStep1(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = 'Name is required';
    if (!form.email.trim()) next.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email';
    if (!form.telephone.trim()) next.telephone = 'Telephone is required';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function validateStep2(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.serviceRequired) next.serviceRequired = 'Please select a service';
    if (!form.projectLocation.trim()) next.projectLocation = 'Project location is required';
    if (!form.projectDescription.trim()) next.projectDescription = 'Please describe the project';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.consent) {
      setErrors({ consent: 'You must consent to be contacted' });
      return;
    }
    setStatus('submitting');

    // DEVELOPMENT MODE: Log to console. Replace with secure API / Supabase / Firebase in production.
    try {
      console.info('[ELSIM Quotation – DEV MODE]', form);
      // Simulate network
      await new Promise((r) => setTimeout(r, 800));
      setStatus('success');
      setForm(initialState);
      setStep(1);
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-energy-500/30 bg-energy-500/5 p-8 text-center" role="status">
        <h3 className="font-display text-xl font-semibold text-white">Request received</h3>
        <p className="mt-2 text-steel-300">
          Thank you. In production this will notify the ELSIM team. (Currently running in development mode.)
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 text-energy-400 hover:text-energy-300 text-sm font-medium"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Progress */}
      <div className="flex gap-2 mb-8" aria-hidden="true">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`h-1 flex-1 rounded-full ${s <= step ? 'bg-energy-500' : 'bg-steel-700'}`}
          />
        ))}
      </div>

      {step === 1 && (
        <div className="space-y-4">
          <h2 className="font-display text-lg font-semibold text-white">Your details</h2>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-steel-300 mb-1">
              Full name *
            </label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(e) => update('name', e.target.value)}
              className="w-full rounded-md border border-steel-700 bg-navy-900 px-3 py-2 text-white placeholder-steel-500 focus:border-energy-500 focus:outline-none focus:ring-1 focus:ring-energy-500"
              autoComplete="name"
            />
            {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-steel-300 mb-1">
              Company
            </label>
            <input
              id="company"
              type="text"
              value={form.company}
              onChange={(e) => update('company', e.target.value)}
              className="w-full rounded-md border border-steel-700 bg-navy-900 px-3 py-2 text-white placeholder-steel-500 focus:border-energy-500 focus:outline-none focus:ring-1 focus:ring-energy-500"
              autoComplete="organization"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-steel-300 mb-1">
              Email *
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => update('email', e.target.value)}
              className="w-full rounded-md border border-steel-700 bg-navy-900 px-3 py-2 text-white placeholder-steel-500 focus:border-energy-500 focus:outline-none focus:ring-1 focus:ring-energy-500"
              autoComplete="email"
            />
            {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="telephone" className="block text-sm font-medium text-steel-300 mb-1">
              Telephone *
            </label>
            <input
              id="telephone"
              type="tel"
              value={form.telephone}
              onChange={(e) => update('telephone', e.target.value)}
              className="w-full rounded-md border border-steel-700 bg-navy-900 px-3 py-2 text-white placeholder-steel-500 focus:border-energy-500 focus:outline-none focus:ring-1 focus:ring-energy-500"
              autoComplete="tel"
            />
            {errors.telephone && <p className="mt-1 text-sm text-red-400">{errors.telephone}</p>}
          </div>
          <button
            type="button"
            onClick={() => validateStep1() && setStep(2)}
            className="w-full sm:w-auto rounded-md bg-energy-500 px-5 py-2.5 text-sm font-semibold text-navy-950 hover:bg-energy-400 transition-colors"
          >
            Continue
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <h2 className="font-display text-lg font-semibold text-white">Project details</h2>
          <div>
            <label htmlFor="serviceRequired" className="block text-sm font-medium text-steel-300 mb-1">
              Service required *
            </label>
            <select
              id="serviceRequired"
              value={form.serviceRequired}
              onChange={(e) => update('serviceRequired', e.target.value)}
              className="w-full rounded-md border border-steel-700 bg-navy-900 px-3 py-2 text-white focus:border-energy-500 focus:outline-none focus:ring-1 focus:ring-energy-500"
            >
              <option value="">Select a service</option>
              {services.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.title}
                </option>
              ))}
              <option value="other">Other / Not sure</option>
            </select>
            {errors.serviceRequired && (
              <p className="mt-1 text-sm text-red-400">{errors.serviceRequired}</p>
            )}
          </div>
          <div>
            <label htmlFor="projectType" className="block text-sm font-medium text-steel-300 mb-1">
              Project type
            </label>
            <select
              id="projectType"
              value={form.projectType}
              onChange={(e) => update('projectType', e.target.value)}
              className="w-full rounded-md border border-steel-700 bg-navy-900 px-3 py-2 text-white focus:border-energy-500 focus:outline-none focus:ring-1 focus:ring-energy-500"
            >
              <option value="">Select type</option>
              <option value="new-installation">New installation</option>
              <option value="upgrade">Upgrade / expansion</option>
              <option value="maintenance">Maintenance</option>
              <option value="consulting">Consulting / audit</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="projectLocation" className="block text-sm font-medium text-steel-300 mb-1">
              Project location *
            </label>
            <input
              id="projectLocation"
              type="text"
              value={form.projectLocation}
              onChange={(e) => update('projectLocation', e.target.value)}
              placeholder="City / region"
              className="w-full rounded-md border border-steel-700 bg-navy-900 px-3 py-2 text-white placeholder-steel-500 focus:border-energy-500 focus:outline-none focus:ring-1 focus:ring-energy-500"
            />
            {errors.projectLocation && (
              <p className="mt-1 text-sm text-red-400">{errors.projectLocation}</p>
            )}
          </div>
          <div>
            <label htmlFor="projectDescription" className="block text-sm font-medium text-steel-300 mb-1">
              Project description *
            </label>
            <textarea
              id="projectDescription"
              rows={4}
              value={form.projectDescription}
              onChange={(e) => update('projectDescription', e.target.value)}
              className="w-full rounded-md border border-steel-700 bg-navy-900 px-3 py-2 text-white placeholder-steel-500 focus:border-energy-500 focus:outline-none focus:ring-1 focus:ring-energy-500"
              placeholder="Briefly describe the scope, current situation and what you need"
            />
            {errors.projectDescription && (
              <p className="mt-1 text-sm text-red-400">{errors.projectDescription}</p>
            )}
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="rounded-md border border-steel-600 px-4 py-2 text-sm text-steel-300 hover:bg-steel-800"
            >
              Back
            </button>
            <button
              type="button"
              onClick={() => validateStep2() && setStep(3)}
              className="rounded-md bg-energy-500 px-5 py-2.5 text-sm font-semibold text-navy-950 hover:bg-energy-400"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <h2 className="font-display text-lg font-semibold text-white">Timeline & consent</h2>
          <div>
            <label htmlFor="estimatedTimeline" className="block text-sm font-medium text-steel-300 mb-1">
              Estimated timeline
            </label>
            <select
              id="estimatedTimeline"
              value={form.estimatedTimeline}
              onChange={(e) => update('estimatedTimeline', e.target.value)}
              className="w-full rounded-md border border-steel-700 bg-navy-900 px-3 py-2 text-white focus:border-energy-500 focus:outline-none focus:ring-1 focus:ring-energy-500"
            >
              <option value="">Select</option>
              <option value="urgent">Urgent (within weeks)</option>
              <option value="1-3months">1–3 months</option>
              <option value="3-6months">3–6 months</option>
              <option value="6plus">6+ months</option>
              <option value="planning">Still planning</option>
            </select>
          </div>
          <div>
            <label htmlFor="budgetRange" className="block text-sm font-medium text-steel-300 mb-1">
              Budget range (optional)
            </label>
            <select
              id="budgetRange"
              value={form.budgetRange}
              onChange={(e) => update('budgetRange', e.target.value)}
              className="w-full rounded-md border border-steel-700 bg-navy-900 px-3 py-2 text-white focus:border-energy-500 focus:outline-none focus:ring-1 focus:ring-energy-500"
            >
              <option value="">Prefer not to say</option>
              <option value="under-50k">Under GHS 50,000</option>
              <option value="50-200k">GHS 50,000 – 200,000</option>
              <option value="200k-1m">GHS 200,000 – 1M</option>
              <option value="over-1m">Over GHS 1M</option>
            </select>
          </div>
          <div className="flex items-start gap-3">
            <input
              id="consent"
              type="checkbox"
              checked={form.consent}
              onChange={(e) => update('consent', e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-steel-600 text-energy-500 focus:ring-energy-500"
            />
            <label htmlFor="consent" className="text-sm text-steel-300">
              I consent to be contacted by ELSIM Engineering regarding this enquiry. *
            </label>
          </div>
          {errors.consent && <p className="text-sm text-red-400">{errors.consent}</p>}

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="rounded-md border border-steel-600 px-4 py-2 text-sm text-steel-300 hover:bg-steel-800"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="rounded-md bg-energy-500 px-5 py-2.5 text-sm font-semibold text-navy-950 hover:bg-energy-400 disabled:opacity-60 transition-colors"
            >
              {status === 'submitting' ? 'Submitting…' : 'Submit request'}
            </button>
          </div>
          {status === 'error' && (
            <p className="text-sm text-red-400" role="alert">
              Something went wrong. Please try again or contact us directly.
            </p>
          )}
        </div>
      )}

      <p className="text-xs text-steel-500 pt-4">
        Development mode: submissions are logged to the console only. Connect a secure backend (Supabase / Firebase / custom API) for production.
      </p>
    </form>
  );
}
