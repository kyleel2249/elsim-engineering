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

  email: 'elsimengineering@gmail.com',

  vision:
    'To be the leading provider of electrical engineering solutions in West Africa—recognized for excellence, integrity, and our commitment to innovation, sustainability, and community advancement.',

  mission:
    'To deliver reliable, safe, and innovative engineering solutions that not only exceed client expectations but also contribute to sustainable development and long-term success.',

  philosophy:
    "At ELSIM Engineering, we believe that quality engineering is not just about wires and systems—it's about people, purpose, and progress. Our philosophy is rooted in the belief that every project deserves integrity, precision, and care. We approach each task with a deep sense of responsibility, aiming to build solutions that are safe, sustainable, and forward-thinking. We do not just complete projects—we build trust, foster innovation, and empower growth for our clients and communities.",

  values: [
    {
      id: 'excellence',
      title: 'Excellence',
      description:
        'We uphold the highest standards in service delivery, craftsmanship, and client satisfaction.',
    },
    {
      id: 'integrity',
      title: 'Integrity',
      description: 'We conduct all business with honesty, transparency, and accountability.',
    },
    {
      id: 'safety',
      title: 'Safety',
      description:
        'We prioritize the safety of our team, clients, and communities in every project we undertake.',
    },
    {
      id: 'innovation',
      title: 'Innovation',
      description:
        'We embrace forward-thinking technologies and creative approaches to solve complex challenges.',
    },
    {
      id: 'sustainability',
      title: 'Sustainability',
      description:
        'We are committed to energy-efficient, eco-conscious solutions that promote long-term environmental stewardship.',
    },
    {
      id: 'collaboration',
      title: 'Collaboration',
      description:
        'We believe in strong partnerships—with our clients, communities, and within our team—to achieve shared success.',
    },
  ],

  leadership: [
    {
      name: 'Ing. Simon Sandy Kununya',
      role: 'Chief Executive Officer',
      bio: null as string | null, // No separate biography in the company profile beyond the CEO message below
      photo: null as string | null,
      message:
        'At ELSIM Engineering, our commitment goes beyond delivering electrical solutions—we are passionate about powering progress, reliability, and sustainability across Ghana and beyond. From the beginning, our vision has been to build a company that leads with integrity, delivers excellence, and leaves a lasting impact on every client and community we serve. We understand that engineering is the backbone of development, and we are proud to contribute to that growth through innovation, expert craftsmanship, and a team-first approach. As we look ahead, we remain dedicated to setting new standards and exceeding expectations—project by project, partnership by partnership. Thank you for trusting ELSIM Engineering.' as string | null,
    },
    {
      // Corrected from "General Manager" — the official company profile
      // (Our Team + Message from the Managing Director) lists this role as
      // Managing Director.
      name: 'Ella Ankah',
      role: 'Managing Director',
      bio: null as string | null,
      photo: null as string | null,
      message:
        "Every successful project begins with a deep understanding of our clients' needs and a commitment to delivering smart, safe, and scalable solutions. At ELSIM Engineering, I have the privilege of working with a team of skilled professionals who bring passion and precision to every job, big or small. Our strength lies not only in our technical expertise but in our collaborative spirit, proactive service, and attention to detail. As Managing Director, my goal is to ensure seamless project execution and consistent client satisfaction—from consultation to completion. We look forward to being your trusted engineering partner." as string | null,
    },
    {
      name: 'Ing. Teye Amos Agudey',
      role: 'Engineer / Project Manager',
      bio: null as string | null,
      photo: null as string | null,
      message: null as string | null,
    },
    {
      name: 'Stephen Doe Agbo',
      role: 'Chief Accounts Officer',
      bio: null as string | null,
      photo: null as string | null,
      message: null as string | null,
    },
  ],

  regions: ['Ghana', 'Togo', 'Côte d\'Ivoire', 'Burkina Faso', 'Senegal', 'Niger'],

  /**
   * Certifications & Professional Standards
   * Source: "Our Certifications" section of the official company profile
   * (Elsim_Company_Profile.pdf, pages 11–17). Transcribed as documented —
   * registration/certificate numbers, classes and validity dates are as
   * printed on each certificate.
   */
  certifications: [
    {
      name: 'Certificate of Incorporation',
      issuingBody: 'Registrar General\'s Department, Republic of Ghana',
      detail:
        'ELSIM Engineering Firm Ltd, incorporated under the Companies Act, 2019 (Act 992). Reg. No. CS193211124 · TIN C0064839885. Issued at Accra, 26 November 2024.',
    },
    {
      name: 'Certificate of Classification — Electrical & Plumbing Works',
      issuingBody: 'Ministry of Works and Housing, Republic of Ghana',
      detail:
        'Category E, Electrical Works, Financial Class 2 ($75,000–$200,000). MWH/CERT. No. 09404B. Issued 4 March 2025, valid until 3 March 2026.',
    },
    {
      name: 'Certificate of Classification — Class "B" Contractor',
      issuingBody: 'Electricity Company of Ghana Limited',
      detail:
        'Classified to undertake construction of 11/33kV overhead line distribution networks. Classification No. ECG/2025/03/002. Issued 18 March 2025, valid until 17 March 2027.',
    },
    {
      name: 'Supplier, Contractor, Consultant Registration Certificate',
      issuingBody: 'Public Procurement Authority, Republic of Ghana',
      detail:
        'Registered to engage in government tenders under Section 3(p) of the Public Procurement Act, 2003 (Act 663) as amended. Supplier No. 734121. Issued 25 April 2025, valid until 24 April 2026.',
    },
    {
      name: 'Electrical Contractors\' Licence (External Installation)',
      issuingBody: 'Electricity Company of Ghana Ltd.',
      detail:
        'Licensed to carry out external installation under the Electricity Supply and Distribution (Technical and Operational) Rules, 2005 (LI 1816). Licence No. 23236, held by Kununya Sandy Simon. Issued 21 October 2024, valid until 31 December 2026.',
    },
    {
      name: 'Certificate of Corporate Membership',
      issuingBody: 'Ghana Electrical Contractors Association (established 1948)',
      detail:
        'Duly enrolled corporate member. Membership No. GECA/CM/097. Issued 8 August 2025, valid until 8 August 2027.',
    },
  ] as {
    name: string;
    issuingBody: string;
    detail?: string;
    logo?: string;
  }[],

  /**
   * Our Partners — supplier / technology partners named in the official
   * company profile (page 10). Not certifications; kept separate.
   */
  partners: [
    {
      name: 'Zhejiang Qiankai Electrical Power Equipment Company Limited',
    },
    {
      name: 'MAM for Engineering Industries',
    },
    {
      name: 'Variable Frequency Drive Company Ltd (Mingch)',
    },
    {
      name: 'CCTv Cameras and Accessories Limited (Hivideo)',
    },
    {
      name: 'Star Trans Transformers Technology',
    },
  ] as { name: string }[],
};

export type Company = typeof company;
