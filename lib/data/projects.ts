import { Project } from '@/types';

/**
 * PROVISIONAL PROJECT DATA
 * No authentic project photographs or detailed descriptions were extractable from the Scribd source.
 * This array is intentionally empty / placeholder until ELSIM provides approved project records.
 * Do not invent project names, clients, outcomes or images.
 */
export const projects: Project[] = [
  // Example structure only - NOT real ELSIM data
  // {
  //   slug: 'example-project',
  //   title: '[PENDING APPROVAL]',
  //   location: 'Ghana',
  //   category: 'electrical-installations',
  //   sector: 'commercial',
  //   status: 'pending-verification',
  //   shortDescription: 'Project details pending verification from official company profile.',
  //   description: 'Full case study content requires approved source material.',
  //   images: [],
  //   relatedServices: ['electrical-installations'],
  //   clientPermission: false,
  //   approvalStatus: 'draft',
  // },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug && p.approvalStatus === 'published');
}

export function getPublishedProjects(): Project[] {
  return projects.filter((p) => p.approvalStatus === 'published');
}

export function getProjectsByCategory(category: string): Project[] {
  return getPublishedProjects().filter((p) => p.category === category);
}
