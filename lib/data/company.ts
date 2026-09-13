/**
 * ELSIM Engineering – Official Company Data
 * Source: Company profile (verified fields only)
 */

export const company = {
  name: 'ELSIM Engineering',
  legalName: 'ELSIM Engineering',
  tagline: 'Engineering Precision. Industrial Strength. Safe Execution.',
  description:
    'ELSIM Engineering delivers electrical, energy, industrial and technical solutions designed around safety, reliability and professional execution across Ghana and West Africa.',

  address: {
    line1: 'Oyarifa Teiman, Inside 3T Plaza',
    city: 'Accra',
    country: 'Ghana',
    full: 'Oyarifa Teiman, Inside 3T Plaza, Accra, Ghana',
  },

  phones: ['+233 538 578 943', '+233 264 357 395'],

  // Email to be confirmed from official profile before public display
  email: null as string | null,

  vision:
    'To become a leading provider of electrical engineering solutions in West Africa, recognized for excellence, integrity, innovation, sustainability, and community advancement.',

  mission:
    'To deliver reliable, safe, innovative engineering solutions that exceed client expectations and contribute to sustainable development and long-term success.',

  values: [
    {
      id: 'excellence',
      title: 'Excellence',
      description: 'Precision and quality in every engagement.',
    },
    {
      id: 'integrity',
      title: 'Integrity',
      description: 'Professional and ethical conduct.',
    },
    {
      id: 'safety',
      title: 'Safety',
      description: 'Protecting people, equipment and infrastructure.',
    },
    {
      id: 'innovation',
      title: 'Innovation',
      description: 'Applying better technical approaches.',
    },
    {
      id: 'sustainability',
      title: 'Sustainability',
      description: 'Creating responsible long-term solutions.',
    },
    {
      id: 'collaboration',
      title: 'Collaboration',
      description: 'Working effectively with clients and project teams.',
    },
  ],

  leadership: [
    {
      name: 'Ing. Simon Sandy Kununya',
      role: 'Chief Executive Officer',
      bio: null as string | null, // Pending approved biography
      photo: null as string | null,
    },
    {
      name: 'Ella Ankah',
      role: 'General Manager',
      bio: null as string | null,
      photo: null as string | null,
    },
    {
      name: 'Ing. Teye Amos Agudey',
      role: 'Engineer / Project Manager',
      bio: null as string | null,
      photo: null as string | null,
    },
    {
      name: 'Stephen Doe Agbo',
      role: 'Chief Accounts Officer',
      bio: null as string | null,
      photo: null as string | null,
    },
  ],

  regions: ['Ghana', 'Togo', 'Côte d\'Ivoire', 'Burkina Faso', 'Senegal', 'Niger'],
};

export type Company = typeof company;
