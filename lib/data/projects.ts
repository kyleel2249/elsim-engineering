import { Project } from '@/types';

/**
 * ELSIM Engineering – Verified Project Records
 * Only projects named in the official company profile are listed.
 * Detailed outcomes, costs and client endorsements require further verification before publication.
 */
export const projects: Project[] = [
  {
    slug: 'togo-rural-electrification',
    title: 'Rural Electrification Project',
    location: 'Togo',
    category: 'power-distribution',
    sector: 'public-sector',
    status: 'completed',
    shortDescription: 'Rural electrification works for the Government of Togo.',
    description:
      'Rural electrification project delivered for the Government of Togo. Full technical scope and outcomes pending detailed verification from official project records.',
    images: [],
    relatedServices: ['power-distribution', 'electrical-installations'],
    client: 'Government of Togo',
    clientPermission: true,
    approvalStatus: 'published',
  },
  {
    slug: 'aneho-transformer-800kva',
    title: 'Industrial Machine & 800KVA Transformer Installation',
    location: 'Aného, Togo',
    category: 'power-distribution',
    sector: 'industrial',
    status: 'completed',
    shortDescription: 'Industrial machine installation and 800KVA transformer works in Aného, Togo.',
    description:
      'Installation of industrial machinery and an 800KVA transformer in Aného, Togo. Detailed engineering approach and outcomes pending verification.',
    images: [],
    relatedServices: ['power-distribution', 'electrical-installations'],
    clientPermission: false,
    approvalStatus: 'published',
  },
  {
    slug: 'abidjan-transformer-800kva',
    title: '800KVA Transformer Installation',
    location: "Abidjan, Côte d'Ivoire",
    category: 'power-distribution',
    sector: 'industrial',
    status: 'completed',
    shortDescription: "800KVA transformer installation in Abidjan, Côte d'Ivoire.",
    description:
      'Transformer installation project in Abidjan. Full case-study details pending verified project documentation.',
    images: [],
    relatedServices: ['power-distribution'],
    clientPermission: false,
    approvalStatus: 'published',
  },
  {
    slug: 'togo-network-transmission',
    title: 'Network Line Transmission',
    location: 'Togo',
    category: 'power-distribution',
    sector: 'public-sector',
    status: 'completed',
    shortDescription: 'Network line transmission works for the Government of Togo.',
    description:
      'Network line transmission project for the Government of Togo. Scope and results pending detailed verification.',
    images: [],
    relatedServices: ['power-distribution', 'electrical-installations'],
    client: 'Government of Togo',
    clientPermission: true,
    approvalStatus: 'published',
  },
  {
    slug: 'oyarifa-service-line',
    title: 'Service Line Extension',
    location: 'Oyarifa, Ghana',
    category: 'electrical-installations',
    sector: 'residential',
    status: 'completed',
    shortDescription: 'Service line extension works in Oyarifa, Ghana.',
    description:
      'Service line extension project in Oyarifa, Ghana. Detailed outcomes pending verification.',
    images: [],
    relatedServices: ['electrical-installations'],
    clientPermission: false,
    approvalStatus: 'published',
  },
  {
    slug: 'ouagadougou-solar-extruder',
    title: 'Solar Installation for Extruder Machines',
    location: 'Ouagadougou, Burkina Faso',
    category: 'solar-power-solutions',
    sector: 'industrial',
    status: 'completed',
    shortDescription: 'Solar power installation supporting extruder machines in Ouagadougou.',
    description:
      'Solar installation for extruder machines in Ouagadougou, Burkina Faso. Technical capacity and outcomes pending verification.',
    images: [],
    relatedServices: ['solar-power-solutions'],
    clientPermission: false,
    approvalStatus: 'published',
  },
  {
    slug: 'indupast-solar-togo',
    title: 'Indupast Sarl – Solar Installation',
    location: 'Togo',
    category: 'solar-power-solutions',
    sector: 'industrial',
    status: 'completed',
    shortDescription: 'Solar installation for Indupast Sarl, Togo.',
    description:
      'Solar power installation for Indupast Sarl in Togo. Detailed case study pending approved documentation.',
    images: [],
    relatedServices: ['solar-power-solutions'],
    client: 'Indupast Sarl',
    clientPermission: true,
    approvalStatus: 'published',
  },
  {
    slug: 'indupast-machine-togo',
    title: 'Indupast Sarl – Machine Installation',
    location: 'Togo',
    category: 'electrical-installations',
    sector: 'industrial',
    status: 'completed',
    shortDescription: 'Industrial machine installation for Indupast Sarl, Togo.',
    description:
      'Machine installation project for Indupast Sarl in Togo. Full engineering details pending verification.',
    images: [],
    relatedServices: ['electrical-installations'],
    client: 'Indupast Sarl',
    clientPermission: true,
    approvalStatus: 'published',
  },
  {
    slug: 'dakar-recycling-machine',
    title: 'Recycling Machine Installation',
    location: 'Dakar, Senegal',
    category: 'electrical-installations',
    sector: 'industrial',
    status: 'completed',
    shortDescription: 'Recycling machine installation in Dakar, Senegal.',
    description:
      'Recycling machine installation project in Dakar. Detailed scope and outcomes pending verification.',
    images: [],
    relatedServices: ['electrical-installations'],
    clientPermission: false,
    approvalStatus: 'published',
  },
  {
    slug: 'niger-metal-roofing',
    title: 'Metal and Roofing Machine Installation',
    location: 'Niger',
    category: 'electrical-installations',
    sector: 'industrial',
    status: 'completed',
    shortDescription: 'Metal and roofing machine installation in Niger.',
    description:
      'Metal and roofing machine installation project in Niger. Full case-study content pending approved records.',
    images: [],
    relatedServices: ['electrical-installations'],
    clientPermission: false,
    approvalStatus: 'published',
  },
  {
    slug: 'east-legon-hills',
    title: 'Project Management – Building & Construction',
    location: 'East Legon Hills, Ghana',
    category: 'electrical-consulting',
    sector: 'construction',
    status: 'completed',
    shortDescription: 'Project management for building and construction works in East Legon Hills, Ghana.',
    description:
      'Project management and construction-related engineering support in East Legon Hills, Ghana. Detailed outcomes pending verification.',
    images: [],
    relatedServices: ['electrical-consulting', 'electrical-installations'],
    clientPermission: false,
    approvalStatus: 'published',
  },
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

export function getProjectsByLocation(location: string): Project[] {
  return getPublishedProjects().filter((p) =>
    p.location.toLowerCase().includes(location.toLowerCase())
  );
}
