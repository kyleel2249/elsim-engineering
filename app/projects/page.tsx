import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Selected electrical, solar and infrastructure projects delivered by ELSIM Engineering across Ghana and West Africa.',
};

export default function ProjectsPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h1 className="font-display text-4xl font-bold text-white">Projects</h1>
          <p className="mt-4 text-lg text-steel-300">
            Authentic project photography and verified case studies will be published here once ELSIM management supplies approved assets and descriptions.
          </p>
        </div>

        <div className="rounded-xl border border-dashed border-steel-700 bg-navy-950/60 p-16 text-center">
          <p className="text-steel-400 text-base max-w-md mx-auto">
            No authentic project images or detailed case studies were available from the source document.
            The portfolio system is ready to receive approved project records.
          </p>
          <Link
            href="/quotation"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-energy-500 px-5 py-2.5 text-sm font-semibold text-navy-950 hover:bg-energy-400 transition-colors"
          >
            Discuss a similar project
          </Link>
        </div>
      </div>
    </div>
  );
}
