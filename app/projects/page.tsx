import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/layout/PageHeader';
import { ProjectExplorer } from '@/components/projects/ProjectExplorer';
import { WorkGallery } from '@/components/media/WorkGallery';
import { getPublishedProjects } from '@/lib/data/projects';
import { media, workPhotos } from '@/lib/data/media';
import { pageOpenGraph } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    "Electrical, solar, transformer and infrastructure projects delivered by ELSIM Engineering across Ghana, Togo, Côte d'Ivoire, Burkina Faso, Senegal and Niger.",
  ...pageOpenGraph({
    title: 'Projects — ELSIM Engineering',
    description:
      "Electrical, solar, transformer and infrastructure projects delivered across Ghana, Togo, Côte d'Ivoire, Burkina Faso, Senegal and Niger.",
    path: '/projects',
    image: media.work.transformerKioskInstallation,
  }),
};

export default function ProjectsPage() {
  const projects = getPublishedProjects();

  return (
    <div className="py-16 sm:py-24" style={{ backgroundColor: 'var(--theme-bg)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PageHeader
          eyebrow="Portfolio"
          title="Where our engineers have worked"
          lede="Verified project experience across six countries in West Africa. Case-study detail and site photography are added as approved records become available."
        />

        <ProjectExplorer projects={projects} />

        <section className="mt-16">
          <h2 className="font-display text-2xl font-bold" style={{ color: 'var(--theme-text)' }}>
            From the field
          </h2>
          <p className="mt-2 max-w-2xl text-sm" style={{ color: 'var(--theme-text-muted)' }}>
            ELSIM crews at work across installations, transformer works, line works and
            construction supervision.
          </p>
          <WorkGallery photos={workPhotos} className="mt-6" />
        </section>

        <div
          className="mt-16 rounded border p-6 text-center sm:p-8"
          style={{ borderColor: 'var(--theme-border)', backgroundColor: 'var(--theme-bg-muted)' }}
        >
          <h2 className="font-display text-xl font-semibold" style={{ color: 'var(--theme-text)' }}>
            Planning something similar?
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm" style={{ color: 'var(--theme-text-muted)' }}>
            Send us the location, the load and your timeline. We will come back with an approach and
            an indication of cost.
          </p>
          <Link
            href="/quotation"
            className="mt-6 inline-flex items-center rounded bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent transition-all hover:brightness-110"
          >
            Discuss a similar project
          </Link>
        </div>
      </div>
    </div>
  );
}
