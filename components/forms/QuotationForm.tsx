'use client';

import { useMemo, useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircle, ArrowLeft, ArrowRight, CheckCircle2, Copy, Loader2 } from 'lucide-react';
import { services } from '@/lib/data/services';
import { quotationSchema } from '@/lib/validation/quotation';
import type { QuotationResponse } from '@/lib/validation/quotation';
import { company } from '@/lib/data/company';
import { cn } from '@/lib/utils';

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
  website: string;
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
  website: '',
};

const STEPS = [
  { id: 1, label: 'Your details' },
  { id: 2, label: 'Project details' },
  { id: 3, label: 'Timeline & consent' },
] as const;

const STEP_FIELDS: Record<number, (keyof FormState)[]> = {
  1: ['name', 'email', 'telephone'],
  2: ['serviceRequired', 'projectLocation', 'projectDescription'],
  3: ['consent'],
};

const inputClass =
  'w-full rounded border px-3 py-2.5 text-sm outline-none transition-[border-color,box-shadow] focus:ring-2';

function fieldStyle(invalid: boolean) {
  return {
    borderColor: invalid ? '#B23034' : 'var(--theme-border)',
    backgroundColor: 'var(--theme-surface)',
    color: 'var(--theme-text)',
    boxShadow: invalid ? '0 0 0 1px rgba(178,48,52,0.25)' : undefined,
  } as const;
}

export function QuotationForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [step, setStep] = useState(1);
  const [reference, setReference] = useState<string | null>(null);
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  /** Rough completion signal so people can see progress within a step. */
  const completion = useMemo(() => {
    const required = [
      form.name,
      form.email,
      form.telephone,
      form.serviceRequired,
      form.projectLocation,
      form.projectDescription,
      form.consent ? 'y' : '',
    ];
    const done = required.filter((v) => String(v).trim().length > 0).length;
    return Math.round((done / required.length) * 100);
  }, [form]);

  function update(field: keyof FormState, value: string | boolean) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  /** Validate only the fields belonging to a given step, using the shared schema. */
  function validateStep(target: number): boolean {
    const result = quotationSchema.safeParse(form);
    if (result.success) return true;

    const fields = STEP_FIELDS[target] ?? [];
    const next: Partial<Record<keyof FormState, string>> = {};

    for (const issue of result.error.issues) {
      const field = issue.path[0] as keyof FormState;
      if (fields.includes(field) && !next[field]) next[field] = issue.message;
    }

    setErrors(next);

    if (Object.keys(next).length) {
      // Move focus to the first thing that needs attention.
      const firstField = fields.find((f) => next[f]);
      if (firstField) document.getElementById(firstField)?.focus();
      return false;
    }
    return true;
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!validateStep(3)) return;

    setStatus('submitting');
    setServerMessage(null);

    try {
      const response = await fetch('/api/quotation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      // A static export has no route handlers; the request 404s or returns HTML.
      const contentType = response.headers.get('content-type') ?? '';
      if (!contentType.includes('application/json')) {
        throw new Error('no-endpoint');
      }

      const data = (await response.json()) as QuotationResponse;

      if (!response.ok || !data.ok) {
        if (data.fieldErrors) {
          setErrors(data.fieldErrors as Partial<Record<keyof FormState, string>>);
          // Jump back to the earliest step that has a problem.
          const bad = Object.keys(data.fieldErrors)[0] as keyof FormState;
          const owningStep = Number(
            Object.entries(STEP_FIELDS).find(([, fields]) => fields.includes(bad))?.[0] ?? 1
          );
          setStep(owningStep);
        }
        setServerMessage(data.message);
        setStatus('error');
        return;
      }

      setReference(data.reference ?? null);
      setStatus('success');
      setForm(initialState);
      setStep(1);
    } catch {
      // Endpoint unavailable (static hosting, offline, blocked). Offer a
      // direct handoff rather than losing the enquiry.
      setStatus('error');
      setServerMessage(
        'We could not reach the enquiry service. Call us on ' +
          company.phones[0] +
          ', or use the email handoff below and your details will be prefilled.'
      );
    }
  }

  function mailtoHref() {
    const lines = [
      `Name: ${form.name}`,
      `Company: ${form.company || '—'}`,
      `Email: ${form.email}`,
      `Telephone: ${form.telephone}`,
      `Service required: ${form.serviceRequired}`,
      `Project type: ${form.projectType || '—'}`,
      `Project location: ${form.projectLocation}`,
      `Estimated timeline: ${form.estimatedTimeline || '—'}`,
      `Budget range: ${form.budgetRange || '—'}`,
      '',
      'Project description:',
      form.projectDescription,
    ].join('\n');

    return `mailto:?subject=${encodeURIComponent(
      'ELSIM Engineering — project enquiry'
    )}&body=${encodeURIComponent(lines)}`;
  }

  async function copyReference() {
    if (!reference) return;
    try {
      await navigator.clipboard.writeText(reference);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — the reference is still on screen */
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="rounded border p-8 text-center"
        style={{ borderColor: 'var(--theme-accent)', backgroundColor: 'var(--theme-accent-soft)' }}
        role="status"
      >
        <CheckCircle2 className="mx-auto h-10 w-10 text-accent" aria-hidden />
        <h3 className="mt-4 font-display text-xl font-semibold" style={{ color: 'var(--theme-text)' }}>
          Request received
        </h3>
        <p className="mt-2 text-sm" style={{ color: 'var(--theme-text-muted)' }}>
          The ELSIM team will review your project and respond with next steps.
        </p>

        {reference && (
          <div className="mt-6">
            <p className="text-xs" style={{ color: 'var(--theme-text-subtle)' }}>
              Quote your reference when you call
            </p>
            <button
              type="button"
              onClick={copyReference}
              className="mt-2 inline-flex items-center gap-2 rounded border px-4 py-2 font-mono text-base font-semibold"
              style={{ borderColor: 'var(--theme-border)', backgroundColor: 'var(--theme-surface)' }}
            >
              {reference}
              <Copy className="h-3.5 w-3.5" aria-hidden />
              <span className="sr-only">Copy reference</span>
            </button>
            {copied && (
              <p className="mt-2 text-xs text-accent" role="status">
                Copied
              </p>
            )}
          </div>
        )}

        <button
          type="button"
          onClick={() => {
            setStatus('idle');
            setReference(null);
          }}
          className="mt-6 text-sm font-medium text-accent"
        >
          Submit another request
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Step indicator */}
      <div>
        <ol className="flex gap-2" aria-label="Form progress">
          {STEPS.map((s) => (
            <li key={s.id} className="flex-1">
              <span className="sr-only">
                {`Step ${s.id} of ${STEPS.length}: ${s.label}`}
                {s.id === step ? ' (current)' : ''}
              </span>
              <span
                aria-hidden
                className={cn(
                  'block h-1 rounded-full transition-colors duration-300',
                  s.id <= step ? 'bg-accent' : ''
                )}
                style={s.id <= step ? undefined : { backgroundColor: 'var(--theme-border)' }}
              />
            </li>
          ))}
        </ol>
        <div className="mt-2 flex items-center justify-between text-xs" style={{ color: 'var(--theme-text-subtle)' }}>
          <span>{STEPS[step - 1].label}</span>
          <span aria-hidden>{completion}% complete</span>
        </div>
      </div>

      {/* Honeypot — visually hidden, never announced, never focusable */}
      <div className="hidden" aria-hidden>
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(e) => update('website', e.target.value)}
        />
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -12 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-4"
        >
          {step === 1 && (
            <>
              <Field id="name" label="Full name" required error={errors.name}>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  className={inputClass}
                  style={fieldStyle(Boolean(errors.name))}
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
              </Field>

              <Field id="company" label="Company">
                <input
                  id="company"
                  type="text"
                  value={form.company}
                  onChange={(e) => update('company', e.target.value)}
                  className={inputClass}
                  style={fieldStyle(false)}
                  autoComplete="organization"
                />
              </Field>

              <Field id="email" label="Email" required error={errors.email}>
                <input
                  id="email"
                  type="email"
                  inputMode="email"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  className={inputClass}
                  style={fieldStyle(Boolean(errors.email))}
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
              </Field>

              <Field id="telephone" label="Telephone" required error={errors.telephone}>
                <input
                  id="telephone"
                  type="tel"
                  inputMode="tel"
                  value={form.telephone}
                  onChange={(e) => update('telephone', e.target.value)}
                  placeholder="+233 …"
                  className={inputClass}
                  style={fieldStyle(Boolean(errors.telephone))}
                  autoComplete="tel"
                  aria-invalid={Boolean(errors.telephone)}
                  aria-describedby={errors.telephone ? 'telephone-error' : undefined}
                />
              </Field>
            </>
          )}

          {step === 2 && (
            <>
              <Field id="serviceRequired" label="Service required" required error={errors.serviceRequired}>
                <select
                  id="serviceRequired"
                  value={form.serviceRequired}
                  onChange={(e) => update('serviceRequired', e.target.value)}
                  className={inputClass}
                  style={fieldStyle(Boolean(errors.serviceRequired))}
                  aria-invalid={Boolean(errors.serviceRequired)}
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {s.title}
                    </option>
                  ))}
                  <option value="other">Other / not sure</option>
                </select>
              </Field>

              <Field id="projectType" label="Project type">
                <select
                  id="projectType"
                  value={form.projectType}
                  onChange={(e) => update('projectType', e.target.value)}
                  className={inputClass}
                  style={fieldStyle(false)}
                >
                  <option value="">Select type</option>
                  <option value="new-installation">New installation</option>
                  <option value="upgrade">Upgrade or expansion</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="consulting">Consulting or audit</option>
                  <option value="other">Other</option>
                </select>
              </Field>

              <Field id="projectLocation" label="Project location" required error={errors.projectLocation}>
                <input
                  id="projectLocation"
                  type="text"
                  value={form.projectLocation}
                  onChange={(e) => update('projectLocation', e.target.value)}
                  placeholder="City and country"
                  className={inputClass}
                  style={fieldStyle(Boolean(errors.projectLocation))}
                  aria-invalid={Boolean(errors.projectLocation)}
                />
              </Field>

              <Field
                id="projectDescription"
                label="Project description"
                required
                error={errors.projectDescription}
                hint={`${form.projectDescription.trim().length}/4000`}
              >
                <textarea
                  id="projectDescription"
                  rows={5}
                  maxLength={4000}
                  value={form.projectDescription}
                  onChange={(e) => update('projectDescription', e.target.value)}
                  placeholder="Scope, current situation, and what you need from us"
                  className={inputClass}
                  style={fieldStyle(Boolean(errors.projectDescription))}
                  aria-invalid={Boolean(errors.projectDescription)}
                />
              </Field>
            </>
          )}

          {step === 3 && (
            <>
              <Field id="estimatedTimeline" label="Estimated timeline">
                <select
                  id="estimatedTimeline"
                  value={form.estimatedTimeline}
                  onChange={(e) => update('estimatedTimeline', e.target.value)}
                  className={inputClass}
                  style={fieldStyle(false)}
                >
                  <option value="">Select</option>
                  <option value="urgent">Urgent — within weeks</option>
                  <option value="1-3months">1 to 3 months</option>
                  <option value="3-6months">3 to 6 months</option>
                  <option value="6plus">6 months or more</option>
                  <option value="planning">Still planning</option>
                </select>
              </Field>

              <Field id="budgetRange" label="Budget range (optional)">
                <select
                  id="budgetRange"
                  value={form.budgetRange}
                  onChange={(e) => update('budgetRange', e.target.value)}
                  className={inputClass}
                  style={fieldStyle(false)}
                >
                  <option value="">Prefer not to say</option>
                  <option value="under-50k">Under GHS 50,000</option>
                  <option value="50-200k">GHS 50,000 to 200,000</option>
                  <option value="200k-1m">GHS 200,000 to 1M</option>
                  <option value="over-1m">Over GHS 1M</option>
                </select>
              </Field>

              {/* Review summary so people can check before sending */}
              <div
                className="rounded border p-4 text-sm"
                style={{ borderColor: 'var(--theme-border)', backgroundColor: 'var(--theme-surface)' }}
              >
                <p className="mb-2 font-medium" style={{ color: 'var(--theme-text)' }}>
                  Check before you send
                </p>
                <dl className="grid gap-1.5" style={{ color: 'var(--theme-text-muted)' }}>
                  <Row label="Name" value={form.name} />
                  <Row label="Email" value={form.email} />
                  <Row label="Telephone" value={form.telephone} />
                  <Row
                    label="Service"
                    value={
                      services.find((s) => s.slug === form.serviceRequired)?.title ||
                      form.serviceRequired
                    }
                  />
                  <Row label="Location" value={form.projectLocation} />
                </dl>
              </div>

              <div className="flex items-start gap-3">
                <input
                  id="consent"
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => update('consent', e.target.checked)}
                  className="mt-1 h-4 w-4 accent-[var(--theme-accent)]"
                  aria-invalid={Boolean(errors.consent)}
                />
                <label htmlFor="consent" className="text-sm" style={{ color: 'var(--theme-text-muted)' }}>
                  I consent to ELSIM Engineering contacting me about this enquiry.
                </label>
              </div>
              {errors.consent && (
                <p className="text-sm" style={{ color: '#B23034' }} role="alert">
                  {errors.consent}
                </p>
              )}
            </>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex flex-wrap items-center gap-3 pt-2">
        {step > 1 && (
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            className="inline-flex items-center gap-2 rounded border px-4 py-2.5 text-sm transition-colors"
            style={{
              borderColor: 'var(--theme-border)',
              color: 'var(--theme-text-muted)',
              backgroundColor: 'var(--theme-surface)',
            }}
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back
          </button>
        )}

        {step < 3 ? (
          <button
            type="button"
            onClick={() => validateStep(step) && setStep((s) => s + 1)}
            className="inline-flex items-center gap-2 rounded bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent transition-all hover:brightness-110"
          >
            Continue
            <ArrowRight className="h-4 w-4" aria-hidden />
          </button>
        ) : (
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="inline-flex items-center gap-2 rounded bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent transition-all hover:brightness-110 disabled:opacity-60"
          >
            {status === 'submitting' && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
            {status === 'submitting' ? 'Sending' : 'Send request'}
          </button>
        )}
      </div>

      {status === 'error' && serverMessage && (
        <div
          className="flex gap-3 rounded border p-4 text-sm"
          style={{ borderColor: '#B23034', backgroundColor: 'var(--theme-accent-soft)' }}
          role="alert"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" style={{ color: '#B23034' }} aria-hidden />
          <div style={{ color: 'var(--theme-text)' }}>
            <p>{serverMessage}</p>
            <a href={mailtoHref()} className="mt-2 inline-block font-medium text-accent underline">
              Open this enquiry in your email app
            </a>
          </div>
        </div>
      )}
    </form>
  );
}

function Field({
  id,
  label,
  required,
  error,
  hint,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-1 flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="text-sm font-medium" style={{ color: 'var(--theme-text)' }}>
          {label}
          {required && (
            <span className="text-accent" aria-hidden>
              {' '}
              *
            </span>
          )}
          {required && <span className="sr-only"> (required)</span>}
        </label>
        {hint && (
          <span className="text-[11px] tabular-nums" style={{ color: 'var(--theme-text-subtle)' }}>
            {hint}
          </span>
        )}
      </div>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm" style={{ color: '#B23034' }} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-2">
      <dt className="w-24 shrink-0">{label}</dt>
      <dd className="min-w-0 flex-1 truncate" style={{ color: 'var(--theme-text)' }}>
        {value || '—'}
      </dd>
    </div>
  );
}
