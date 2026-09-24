import { formatDate } from '@/lib/utils';

interface Section {
  heading: string;
  body: string;
}

/**
 * Renders a legal document with an anchored contents list.
 * Shared by the privacy policy and terms of use so both stay consistent.
 */
export function LegalDocument({
  sections,
  lastUpdated,
}: {
  sections: Section[];
  lastUpdated: string;
}) {
  const slug = (heading: string) =>
    heading
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');

  return (
    <div className="mt-10">
      <p className="text-sm" style={{ color: 'var(--theme-text-subtle)' }}>
        Last updated {formatDate(lastUpdated)}
      </p>

      <nav
        className="mt-8 rounded border p-5"
        style={{ borderColor: 'var(--theme-border)', backgroundColor: 'var(--theme-bg-muted)' }}
        aria-label="On this page"
      >
        <h2 className="text-sm font-semibold" style={{ color: 'var(--theme-text)' }}>
          On this page
        </h2>
        <ol className="mt-3 grid gap-1.5 text-sm sm:grid-cols-2">
          {sections.map((section) => (
            <li key={section.heading}>
              <a href={`#${slug(section.heading)}`} className="link-underline text-accent">
                {section.heading}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="mt-12 space-y-10">
        {sections.map((section) => (
          <section key={section.heading} id={slug(section.heading)} className="scroll-mt-28">
            <h2
              className="font-display text-xl font-semibold"
              style={{ color: 'var(--theme-text)' }}
            >
              {section.heading}
            </h2>
            <p className="mt-3 leading-relaxed" style={{ color: 'var(--theme-text-muted)' }}>
              {section.body}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}
