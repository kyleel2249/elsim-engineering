export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  features: string[];
  process: string[];
  safetyNotes: string[];
  relatedProjects: string[];
  faq: { question: string; answer: string }[];
}

export interface Project {
  slug: string;
  title: string;
  location: string;
  category: string;
  sector: string;
  status: 'completed' | 'ongoing' | 'pending-verification';
  shortDescription: string;
  description: string;
  challenge?: string;
  scope?: string[];
  outcomes?: string[];
  images: string[];
  relatedServices: string[];
  client?: string;
  clientPermission: boolean;
  completionDate?: string;
  approvalStatus: 'draft' | 'review' | 'approved' | 'published';
}

export interface Industry {
  slug: string;
  title: string;
  description: string;
  commonProblems: string[];
  relevantServices: string[];
}

export interface QuotationFormData {
  name: string;
  company: string;
  email: string;
  telephone: string;
  projectType: string;
  serviceRequired: string;
  projectLocation: string;
  projectDescription: string;
  estimatedTimeline: string;
  budgetRange?: string;
  consent: boolean;
}

export interface LeadershipMember {
  name: string;
  role: string;
  bio: string;
  photo?: string;
  approvalStatus: 'draft' | 'approved' | 'published';
}
