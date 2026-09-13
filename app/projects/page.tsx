import type { Metadata } from 'next';
import Link from 'next/link';
import { getPublishedProjects } from '@/lib/data/projects';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Selected electrical, solar and infrastructure projects delivered by ELSIM Engineering across Ghana, Togo, Côte d\'Ivoire, Burkina Faso, Senegal and Niger.',
};

export default function ProjectsPage() {
  const projects = getPublishedProjects();

  return (
    <div className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] text-burgundy uppercase mb-3">
            Portfolio
          </p>
          <h1 className="font-display text-4xl font-bold text-charcoal">Projects</h1>
          <p className="mt-4 text-lg text-charcoal-600">
            Verified project experience across West Africa. Detailed case studies and project photography will be added as approved assets become available.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group rounded border border-metal-200 bg-metal-50 p-5 hover:border-burgundy/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-burgundy">
                  {project.location}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-charcoal-400">
                  {project.sector}
                </span>
              </div>
              <h2 className="font-display text-base font-semibold text-charcoal group-hover:text-burgundy transition-colors">
                {project.title}
              </h2>
              <p className="mt-2 text-sm text-charcoal-600 line-clamp-3">
                {project.shortDescription}
              </p>
              {project.client && project.clientPermission && (
                <p className="mt-3 text-xs text-charcoal-400">Client: {project.client}</p>
              )}
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-charcoal-500 mb-4">
            Interested in a similar project?
          </p>
          <Link
            href="/quotation"
            className="inline-flex items-center justify-center rounded bg-burgundy px-5 py-2.5 text-sm font-semibold text-white hover:bg-burgundy-600 transition-colors"
          >
            Discuss a similar project
          </Link>
        </div>
      </div>
    </div>
  );
}
