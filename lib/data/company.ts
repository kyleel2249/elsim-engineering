/**
 * ELSIM Engineering – Official Company Data
 * Source: Company profile (verified fields only)
 */

export const company = {
  name: 'ELSIM Engineering Firm',
  legalName: 'ELSIM Engineering Firm',
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
      id: 'ceo',
      name: 'Ing. Simon Sandy Kununya',
      role: 'Chief Executive Officer',
      bio: null as string | null,
      photo: null as string | null,
      message:
        'At ELSIM Engineering, our commitment goes beyond delivering electrical solutions—we are passionate about powering progress, reliability, and sustainability across Ghana and beyond. From the beginning, our vision has been to build a company that leads with integrity, delivers excellence, and leaves a lasting impact on every client and community we serve. We understand that engineering is the backbone of development, and we are proud to contribute to that growth through innovation, expert craftsmanship, and a team-first approach. As we look ahead, we remain dedicated to setting new standards and exceeding expectations—project by project, partnership by partnership. Thank you for trusting ELSIM Engineering.',
    },
    {
      id: 'md',
      name: 'Ella Ankah',
      role: 'Managing Director',
      bio: null as string | null,
      photo: null as string | null,
      message:
        "Every successful project begins with a deep understanding of our clients' needs and a commitment to delivering smart, safe, and scalable solutions. At ELSIM Engineering, I have the privilege of working with a team of skilled professionals who bring passion and precision to every job, big or small. Our strength lies not only in our technical expertise but in our collaborative spirit, proactive service, and attention to detail. As Managing Director, my goal is to ensure seamless project execution and consistent client satisfaction—from consultation to completion. We look forward to being your trusted engineering partner.",
    },
    {
      id: 'pm',
      name: 'Ing. Teye Amos Agudey',
      role: 'Engineer / Project Manager',
      bio: null as string | null,
      photo: null as string | null,
      message: null as string | null,
    },
    {
      id: 'cao',
      name: 'Stephen Doe Agbo',
      role: 'Chief Accounts Officer',
      bio: null as string | null,
      photo: null as string | null,
      message: null as string | null,
    },
  ],

  regions: ['Ghana', 'Togo', "Côte d'Ivoire", 'Burkina Faso', 'Senegal', 'Niger'],

  /**
   * Certifications & Professional Standards
   * Source: "Our Certifications" section of the official company profile
   */
  certifications: [
    {
      name: 'Certificate of Incorporation',
      issuingBody: "Registrar General's Department, Republic of Ghana",
      detail:
        'ELSIM Engineering Firm Ltd, incorporated under the Companies Act, 2019 (Act 992). Reg. No. CS193211124 · TIN C0064839885. Issued at Accra, 26 November 2024.',
      image: '/assets/elsim/certificates/certificate-of-incorporation.jpg',
      imageAlt:
        'Certificate of Incorporation for ELSIM Engineering Firm Ltd issued by the Registrar of Companies, Republic of Ghana, 26 November 2024. Reg. No. CS193211124, TIN C0064839885.',
    },
    {
      name: 'Certificate of Classification — Electrical & Plumbing Works',
      issuingBody: 'Ministry of Works and Housing, Republic of Ghana',
      detail:
        'Category E, Electrical Works, Financial Class 2 ($75,000–$200,000). MWH/CERT. No. 09404B. Issued 4 March 2025, valid until 3 March 2026.',
      image: '/assets/elsim/certificates/mwh-classification.jpg',
      imageAlt:
        'Ministry of Works and Housing Certificate of Classification for ELSIM Engineering Firm Ltd — Category E Electrical Works, Financial Class 2 ($75,000 to $200,000). Valid until 3 March 2026.',
    },
    {
      name: 'Certificate of Classification — Class "B" Contractor',
      issuingBody: 'Electricity Company of Ghana Limited',
      detail:
        'Classified to undertake construction of 11/33kV overhead line distribution networks. Classification No. ECG/2025/03/002. Issued 18 March 2025, valid until 17 March 2027.',
      image: '/assets/elsim/certificates/ecg-classification-class-b.jpg',
      imageAlt:
        'Electricity Company of Ghana Certificate of Classification for ELSIM Engineering Firm Ltd as Class B contractor for construction of 11/33kV overhead line distribution networks. Valid until 17 March 2027.',
      relatedImage: '/assets/elsim/certificates/ecg-category-of-works.jpg',
      relatedImageAlt:
        'ECG Category of Works and Grading Scheme tables — categories 1–5 of electrical works and contractor grading classes A–E.',
    },
    {
      name: 'Supplier, Contractor, Consultant Registration Certificate',
      issuingBody: 'Public Procurement Authority, Republic of Ghana',
      detail:
        'Registered to engage in government tenders under Section 3(p) of the Public Procurement Act, 2003 (Act 663) as amended. Supplier No. 734121. Issued 25 April 2025, valid until 24 April 2026.',
      image: '/assets/elsim/certificates/ppa-supplier-registration.jpg',
      imageAlt:
        'Public Procurement Authority Supplier, Contractor, Consultant Registration Certificate for ELSIM Engineering Firm Ltd. Supplier No. 734121. Valid until 24 April 2026.',
    },
    {
      name: "Electrical Contractors' Licence (External Installation)",
      issuingBody: 'Electricity Company of Ghana Ltd.',
      detail:
        'Licensed to carry out external installation under the Electricity Supply and Distribution (Technical and Operational) Rules, 2005 (LI 1816). Licence No. 23236, held by Kununya Sandy Simon. Issued 21 October 2024, valid until 31 December 2026.',
      image: '/assets/elsim/certificates/ecg-contractors-licence.jpg',
      imageAlt:
        "Electricity Company of Ghana Electrical Contractors' Licence (External Installation) No. 23236 for ELSIM Engineering Firm Ltd, held by Kununya Sandy Simon. Valid until 31 December 2026.",
    },
    {
      name: 'Certificate of Corporate Membership',
      issuingBody: 'Ghana Electrical Contractors Association (established 1948)',
      detail:
        'Duly enrolled corporate member. Membership No. GECA/CM/097. Issued 8 August 2025, valid until 8 August 2027.',
      image: '/assets/elsim/certificates/geca-corporate-membership.jpg',
      imageAlt:
        'Ghana Electrical Contractors Association Certificate of Corporate Membership for ELSIM Engineering Firm Limited. Membership No. GECA/CM/097. Valid until 8 August 2027.',
    },
  ] as {
    name: string;
    issuingBody: string;
    detail?: string;
    logo?: string;
    image?: string;
    imageAlt?: string;
    relatedImage?: string;
    relatedImageAlt?: string;
  }[],

  partners: [
    {
      name: 'Zhejiang Qiankai Electrical Power Equipment Company Limited',
      logo: '/assets/elsim/partners/zhejiang-qiankai.png',
      logoAlt:
        'Logo of Zhejiang Qiankai Electrical Power Equipment Company Limited (FCQK)',
    },
    {
      name: 'MAM for Engineering Industries',
      logo: '/assets/elsim/partners/mam-engineering.png',
      logoAlt: 'Logo of MAM for Engineering Industries (Youssef El Sherif)',
    },
    {
      name: 'Variable Frequency Drive Company Ltd (Mingch)',
      logo: '/assets/elsim/partners/mingch-vfd.png',
      logoAlt: 'Logo of Mingch Variable Frequency Drive Company Ltd',
    },
    {
      name: 'CCTv Cameras and Accessories Limited (Hivideo)',
      logo: '/assets/elsim/partners/hivideo.png',
      logoAlt: 'Logo of Hivideo — CCTV Cameras and Accessories Limited',
    },
    {
      name: 'Star Trans Transformers Technology',
      logo: '/assets/elsim/partners/star-trans.png',
      logoAlt: 'Logo of Star Trans Transformers Technology',
    },
  ] as {
    name: string;
    logo?: string;
    logoAlt?: string;
  }[],
};

export type Company = typeof company;
