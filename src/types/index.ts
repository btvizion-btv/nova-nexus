export type PageRoute = 'home' | 'services' | 'case-studies' | 'hosting' | 'about' | 'estimator' | 'contact';

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  deliverables: string[];
  techStack: string[];
  metrics: string;
  badge: string;
  image?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  serviceCategory: 'all' | 'web-cloud' | 'mobile' | 'ai-agents' | 'marketing-seo';
  challenge: string;
  solution: string;
  results: {
    label: string;
    value: string;
  }[];
  techStack: string[];
  image: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface HostingPlan {
  id: string;
  name: string;
  tagline: string;
  priceMonthly: number;
  priceAnnual: number;
  specs: {
    vCPU: string;
    ram: string;
    storage: string;
    bandwidth: string;
    sla: string;
    edgeLocations: string;
  };
  features: string[];
  recommended?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  metric: string;
  projectType: string;
}

export interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  bio: string;
  experience: string;
}
