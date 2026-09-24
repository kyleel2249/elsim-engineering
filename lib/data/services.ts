import { Service } from '@/types';

/**
 * PROVISIONAL SERVICE DATA
 * Source: Limited public summary from Scribd AI description only.
 * All content marked for management approval.
 * Do not treat as final ELSIM service definitions.
 */
export const services: Service[] = [
  {
    slug: 'electrical-installations',
    title: 'Electrical Installations',
    shortDescription: 'Professional electrical system design and installation for commercial, industrial and residential facilities.',
    description: '[REQUIRES ELSIM APPROVAL] Comprehensive electrical installation services covering design, supply, installation and commissioning of electrical systems. Scope to be confirmed against official company profile.',
    icon: 'cable',
    features: [
      'System design and load calculations',
      'Cable installation and containment',
      'Switchgear and distribution boards',
      'Lighting and power systems',
      'Testing and commissioning',
    ],
    process: [
      'Site assessment and survey',
      'Detailed design and drawings',
      'Material procurement',
      'Installation and quality control',
      'Testing, commissioning and handover',
    ],
    safetyNotes: [
      'Strict adherence to electrical safety standards',
      'Qualified and certified personnel only',
      'Risk assessment prior to works',
    ],
    relatedProjects: [],
    faq: [
      {
        question: 'What standards do you follow?',
        answer: '[REQUIRES VERIFICATION] ELSIM follows applicable Ghanaian and international electrical standards. Exact certifications pending official confirmation.',
      },
    ],
  },
  {
    slug: 'solar-power-solutions',
    title: 'Solar Power Solutions',
    shortDescription: 'Design, supply and installation of solar photovoltaic systems for reliable renewable energy.',
    description: '[REQUIRES ELSIM APPROVAL] Solar PV system design, installation and maintenance. Scope based on public summary only; full capabilities pending verification from official profile.',
    icon: 'sun',
    features: [
      'Site solar assessment',
      'System sizing and design',
      'Panel and inverter installation',
      'Battery storage options',
      'Monitoring and maintenance',
    ],
    process: [
      'Energy audit and site survey',
      'System design and quotation',
      'Installation and grid connection (where applicable)',
      'Commissioning and training',
      'Ongoing support',
    ],
    safetyNotes: [
      'Working at height procedures',
      'Electrical isolation protocols',
      'Proper earthing and surge protection',
    ],
    relatedProjects: [],
    faq: [],
  },
  {
    slug: 'electrical-maintenance',
    title: 'Electrical Inspection & Maintenance',
    shortDescription: 'Preventive maintenance, inspections and fault diagnosis to keep systems reliable.',
    description: '[REQUIRES ELSIM APPROVAL] Scheduled and reactive electrical maintenance services. Full service package details pending official confirmation.',
    icon: 'tool',
    features: [
      'Preventive maintenance schedules',
      'Infrared thermography (where available)',
      'Fault finding and repairs',
      'Condition reporting',
      'Emergency response (scope to be confirmed)',
    ],
    process: [
      'Initial condition assessment',
      'Maintenance plan development',
      'Scheduled visits and reporting',
      'Corrective actions',
      'Documentation and recommendations',
    ],
    safetyNotes: [
      'Lock-out / tag-out procedures',
      'Personal protective equipment',
      'Competent persons only',
    ],
    relatedProjects: [],
    faq: [],
  },
  {
    slug: 'power-distribution',
    title: 'Power Distribution & Transformer Projects',
    shortDescription: 'Power distribution networks, transformers and related infrastructure works.',
    description: '[REQUIRES ELSIM APPROVAL] Power distribution and transformer-related engineering. Exact scope and capacity limits pending verification.',
    icon: 'transformer',
    features: [
      'Distribution design',
      'Transformer installation and testing',
      'Substation works (scope pending)',
      'Load studies',
    ],
    process: [
      'Engineering study',
      'Detailed design',
      'Procurement and logistics',
      'Installation and testing',
      'Commissioning',
    ],
    safetyNotes: [
      'High-voltage safety protocols',
      'Authorised personnel only',
      'Proper isolation and earthing',
    ],
    relatedProjects: [],
    faq: [],
  },
  {
    slug: 'electrical-consulting',
    title: 'Electrical Consulting & Audits',
    shortDescription: 'Independent electrical consulting, audits and technical advisory services.',
    description: '[REQUIRES ELSIM APPROVAL] Consulting and audit services. Full offering to be confirmed from official company profile.',
    icon: 'clipboard',
    features: [
      'Electrical system audits',
      'Compliance reviews',
      'Energy efficiency assessments',
      'Technical specifications',
    ],
    process: [
      'Briefing and scope definition',
      'Site investigation',
      'Analysis and reporting',
      'Recommendations and follow-up',
    ],
    safetyNotes: [],
    relatedProjects: [],
    faq: [],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
