import { ServiceItem, CaseStudy, HostingPlan, Testimonial, TeamMember } from '../types';
import cloudHostingImg from '../../images/cloud hosting.jpg';
import aiSystemsImg from '../../images/artificial intelligence.jpg';
import webDevImg from '../../images/website development.jpg';
import appDevImg from '../../images/app-dev.jpg';
import caseStudyImg from '../assets/images/case_study_showcase_1794054563840.jpg';
import mobileCloudImg from '../assets/images/service_mobile_cloud_1794054564352.jpg';

export const HERO_BACKGROUND_IMAGE = '/assets/aistudio/laptop-nebula_5c3e6cad.jpg';
export const SERVICE_MOBILE_CLOUD_IMAGE = mobileCloudImg;
export const CASE_STUDY_IMAGE = caseStudyImg;

export const SERVICE_CLOUD_HOSTING_IMAGE = cloudHostingImg as string;
export const SERVICE_AI_IMAGE = aiSystemsImg as string;
export const SERVICE_WEB_IMAGE = webDevImg as string;
export const SERVICE_APP_IMAGE = appDevImg as string;

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-cloud-hosting',
    slug: 'web-cloud-hosting',
    title: 'Web & Cloud Hosting',
    category: 'Cloud Infrastructure & DevOps',
    shortDesc: 'High-availability Kubernetes clusters, serverless edge compute, and automated CI/CD pipelines with 99.99% guaranteed uptime SLA.',
    fullDesc: 'We architect, provision, and maintain fault-tolerant cloud infrastructure tailored for high-concurrency enterprise apps. From automated multi-region failover to Terraform infrastructure-as-code and 24/7 proactive telemetry, we guarantee blazing speed and zero downtime.',
    iconName: 'Server',
    badge: '99.99% SLA Uptime',
    metrics: '12ms global edge response time',
    image: SERVICE_CLOUD_HOSTING_IMAGE,
    features: [
      'Multi-region AWS & Google Cloud Kubernetes (EKS/GKE)',
      'Cloudflare Enterprise CDN & Anycast DDoS protection',
      'Automated zero-downtime CI/CD deployment pipelines',
      'Encrypted backup snapshots & automated disaster recovery',
      '24/7/365 infrastructure monitoring & incident response'
    ],
    deliverables: [
      'Infrastructure as Code (Terraform / Pulumi) repository',
      'Production cluster setup with automated auto-scaling',
      'SSL/TLS, WAF security rules, and DDoS shield policies',
      'Grafana & Prometheus observability dashboard',
      'Incident management runbook and SLA guarantee document'
    ],
    techStack: ['AWS', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform', 'Cloudflare', 'Redis', 'PostgreSQL']
  },
  {
    id: 'web-design-dev',
    slug: 'web-design-dev',
    title: 'Web Design & Development',
    category: 'Full-Stack Development & UX',
    shortDesc: 'Bespoke design systems, interactive 3D/motion interfaces, and lightning-fast web applications built on Next.js, React, and Node.',
    fullDesc: 'We create award-winning web platforms that marry brutalist technical performance with bespoke visual identity. Every interface is crafted with precision micro-interactions, flawless accessibility standards, and Core Web Vitals optimization.',
    iconName: 'Layout',
    badge: '100% Core Web Vitals',
    metrics: '<0.4s initial page load speed',
    image: SERVICE_WEB_IMAGE,
    features: [
      'Custom React 19 & Next.js server-rendered architectures',
      'Component design systems in Tailwind CSS & Figma tokens',
      'Fluid micro-interactions and hardware-accelerated animations',
      'Headless CMS integrations (Sanity, Strapi, Contentful)',
      'Enterprise role-based access control and secure API layers'
    ],
    deliverables: [
      'High-fidelity Figma prototype with interactive design tokens',
      'Production-ready TypeScript web application',
      'Mobile-first responsive layouts tested across 30+ devices',
      'Headless content management system with visual editing',
      'SEO audit report and automated Lighthouse CI checks'
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Motion', 'Node.js', 'GraphQL', 'Vite']
  },
  {
    id: 'cross-platform-apps',
    slug: 'cross-platform-apps',
    title: 'Cross-Platform & iOS/Android Apps',
    category: 'Mobile Development',
    shortDesc: 'Native-feel iOS and Android applications engineered with React Native and Flutter, with offline-first sync and biometric auth.',
    fullDesc: 'Build once and ship natively to both the Apple App Store and Google Play. We develop high-framerate mobile apps with native bridges, background sync, biometric authentication, push notification orchestration, and frictionless in-app purchases.',
    iconName: 'Smartphone',
    badge: '60fps Native Performance',
    metrics: 'Over 4.8+ average app store rating',
    image: SERVICE_APP_IMAGE,
    features: [
      'Cross-platform React Native & Flutter native compilation',
      'Offline-first SQLite/WatermelonDB local state sync',
      'Apple FaceID / Android Biometrics security integration',
      'Firebase Cloud Messaging & OneSignal push campaigns',
      'Store submission, metadata optimization, and approval handling'
    ],
    deliverables: [
      'Production iOS (.ipa) and Android (.aab) signed binaries',
      'Full TypeScript codebase with automated unit & E2E tests',
      'App Store Connect & Google Play Console launch setup',
      'Push notification server webhook integration',
      'Crashlytics & performance telemetry dashboard'
    ],
    techStack: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Expo', 'SQLite', 'Firebase', 'Fastlane']
  },
  {
    id: 'ai-systems-agents',
    slug: 'ai-systems-agents',
    title: 'AI Systems & Custom Agents',
    category: 'Applied AI & Neural Systems',
    shortDesc: 'Autonomous multi-agent architectures, enterprise RAG knowledge bases, and custom fine-tuned LLM workflows that automate complex operations.',
    fullDesc: 'We move beyond toy chatbots to engineer autonomous multi-agent systems that execute multi-step workflows, query private enterprise databases via vector search (RAG), and interact directly with third-party APIs with verifiable safety rails.',
    iconName: 'Cpu',
    badge: 'Autonomous Multi-Agent',
    metrics: '85% manual workflow reduction',
    image: SERVICE_AI_IMAGE,
    features: [
      'Autonomous agent orchestration with LangChain & LangGraph',
      'Enterprise RAG pipelines with hybrid vector & keyword retrieval',
      'Custom fine-tuned models on proprietary company knowledge',
      'Deterministic safety guardrails, hallucination checks, and caching',
      'Voice, document parsing, and vision model multimodal integrations'
    ],
    deliverables: [
      'Custom AI Agent REST API & WebSocket streaming server',
      'Vector database configuration (Pinecone / pgvector / Qdrant)',
      'Enterprise document ingestion & chunking pipeline',
      'Admin monitoring console for token spend and agent accuracy',
      'Safety test suites and evaluation benchmarking harness'
    ],
    techStack: ['Gemini 2.5', 'Python', 'LangChain', 'FastAPI', 'pgvector', 'PyTorch', 'Pinecone', 'LlamaIndex']
  },
  {
    id: 'digital-marketing-seo',
    slug: 'digital-marketing-seo',
    title: 'Digital Marketing & SEO',
    category: 'Growth & Search Domination',
    shortDesc: 'Programmatic SEO, technical indexing audits, high-converting social media funnels, and data-driven organic search acquisition.',
    fullDesc: 'Development meets growth marketing. We build programmatic SEO engines that scale indexable landing pages, conduct rigorous technical Core Web Vitals audits, and manage high-ROI performance marketing across LinkedIn, Meta, and Google Search.',
    iconName: 'TrendingUp',
    badge: 'Data-Driven Growth',
    metrics: '+340% organic qualified pipeline',
    image: CASE_STUDY_IMAGE,
    features: [
      'Programmatic SEO architecture for thousands of high-intent keywords',
      'Technical site audits (Schema.org, crawl budget, sitemaps, canonicals)',
      'Performance marketing management on Google Search & LinkedIn',
      'Conversion Rate Optimization (CRO) A/B testing frameworks',
      'Multi-touch attribution reporting and revenue tracking dashboards'
    ],
    deliverables: [
      'Comprehensive 120-point Technical SEO audit & fix roadmap',
      'Programmatic keyword database and dynamic URL architecture',
      'High-converting social ad creatives and video hook variations',
      'Schema.org structured data deployment across all templates',
      'Real-time Looker Studio / GA4 conversion attribution dashboard'
    ],
    techStack: ['Google Search Console', 'Ahrefs', 'Looker Studio', 'GA4', 'Semrush', 'PostHog', 'Segment', 'HubSpot']
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'apex-fintech',
    title: 'Apex Prime: High-Frequency Wealth Engine',
    client: 'Apex Financial Technologies',
    industry: 'FinTech & Capital Markets',
    serviceCategory: 'web-cloud',
    challenge: 'Apex needed sub-20ms latency execution for 200,000 daily traders while maintaining strict SOC2 compliance and zero downtime across NYSE trading hours.',
    solution: 'Engineered a Kubernetes cloud cluster on AWS with Cloudflare Edge routing, Redis caching tiers, and a React real-time charting interface streaming live WebSocket ticks.',
    results: [
      { label: 'Execution Latency', value: '14ms' },
      { label: 'Uptime Maintained', value: '99.998%' },
      { label: 'AUM Processed', value: 'R25B+' }
    ],
    techStack: ['AWS EKS', 'React 19', 'WebSockets', 'Redis', 'Docker', 'Terraform'],
    image: CASE_STUDY_IMAGE,
    testimonial: {
      quote: 'Nova Nexus rebuilt our core platform in 90 days. Our latency dropped by 65%, and we scaled through market volatility without a single dropped packet.',
      author: 'Marcus Vance',
      role: 'Chief Technology Officer, Apex Capital'
    }
  },
  {
    id: 'neurosync-ai',
    title: 'NeuroSync: Autonomous Enterprise AI Agents',
    client: 'NeuroSync Labs',
    industry: 'Artificial Intelligence & SaaS',
    serviceCategory: 'ai-agents',
    challenge: 'Support teams were overwhelmed by 15,000 monthly enterprise tickets requiring complex data queries across disparate SQL databases and Salesforce instances.',
    solution: 'Designed and deployed an autonomous multi-agent reasoning system using Gemini and vector search with deterministic validation gates that resolves 78% of queries without human intervention.',
    results: [
      { label: 'Tickets Automated', value: '78%' },
      { label: 'First Response Time', value: '2.4s' },
      { label: 'Annual Cost Saved', value: 'R11.5M' }
    ],
    techStack: ['Gemini API', 'LangGraph', 'Python FastAPI', 'pgvector', 'PostgreSQL'],
    image: SERVICE_AI_IMAGE,
    testimonial: {
      quote: 'The agent system Nova Nexus built behaves like a veteran senior engineer on our support desk. It pays for itself every single month.',
      author: 'Elena Rostova',
      role: 'VP of Product, NeuroSync'
    }
  },
  {
    id: 'strata-mobile',
    title: 'Strata Health: Cross-Platform Patient Companion',
    client: 'Strata Healthcare Network',
    industry: 'Digital Health & Telemedicine',
    serviceCategory: 'mobile',
    challenge: 'Strata required a HIPAA & POPIA compliant iOS and Android app connecting patients with real-time biometric monitors, secure video visits, and automated appointment schedules.',
    solution: 'Engineered a React Native cross-platform application with biometric FaceID security, offline-first encrypted SQLite database, and WebRTC encrypted video consults.',
    results: [
      { label: 'App Store Rating', value: '4.9 ★' },
      { label: 'Active Monthly Patients', value: '450k+' },
      { label: 'Crash-Free Sessions', value: '99.94%' }
    ],
    techStack: ['React Native', 'TypeScript', 'WebRTC', 'SQLite', 'Node.js', 'Fastlane'],
    image: SERVICE_MOBILE_CLOUD_IMAGE,
    testimonial: {
      quote: 'Launching simultaneously on iOS and Android with identical polish saved us six months of development time and over R5.5M in development overhead.',
      author: 'Dr. Julian Thorne',
      role: 'Founder & CEO, Strata Health'
    }
  },
  {
    id: 'vanguard-scale',
    title: 'Vanguard Logistics: Programmatic SEO & Growth',
    client: 'Vanguard Global Freight',
    industry: 'Supply Chain & B2B Logistics',
    serviceCategory: 'marketing-seo',
    challenge: 'Vanguard was spending R2.2M/month on Google Ads with diminishing returns and had virtually no organic search presence across 8,000 African and global freight lane queries.',
    solution: 'Engineered a programmatic SEO system generating 8,500 indexable, schema-verified route calculation pages with real-time freight pricing previews and Core Web Vitals optimization.',
    results: [
      { label: 'Organic Inbound Leads', value: '+340%' },
      { label: 'Paid Ad Spend Reduced', value: '-55%' },
      { label: 'Top 3 Keyword Rankings', value: '1,420+' }
    ],
    techStack: ['Next.js', 'Programmatic SEO', 'Schema.org', 'Cloudflare Edge', 'Google Search Console'],
    image: CASE_STUDY_IMAGE,
    testimonial: {
      quote: 'Nova Nexus transformed organic search from an afterthought into our single biggest customer acquisition channel.',
      author: 'Sophia Chen',
      role: 'Head of Growth, Vanguard Global'
    }
  }
];

export const HOSTING_PLANS: HostingPlan[] = [
  {
    id: 'starter-cloud',
    name: 'Growth Cloud',
    tagline: 'Ideal for fast-scaling South African startups and SaaS platforms',
    priceMonthly: 2490,
    priceAnnual: 1990,
    specs: {
      vCPU: '4 dedicated vCPUs',
      ram: '8 GB ECC RAM',
      storage: '160 GB NVMe Gen4 Storage',
      bandwidth: '5 TB Premium Egress',
      sla: '99.9% Uptime SLA',
      edgeLocations: 'Johannesburg, Cape Town & Global PoPs'
    },
    features: [
      'Automated daily backup snapshots',
      'Free Let’s Encrypt Wildcard SSL',
      'Cloudflare Standard CDN caching',
      'Staging & Production git branching',
      'Dedicated South African business hours Slack support'
    ]
  },
  {
    id: 'enterprise-cloud',
    name: 'Scale Cluster',
    tagline: 'High-concurrency platforms requiring guaranteed multi-region redundancy & POPIA compliance',
    priceMonthly: 6490,
    priceAnnual: 5290,
    recommended: true,
    specs: {
      vCPU: '16 dedicated vCPUs',
      ram: '32 GB ECC RAM',
      storage: '600 GB High-IOPS NVMe',
      bandwidth: '20 TB Premium Egress',
      sla: '99.99% Uptime SLA',
      edgeLocations: 'Johannesburg (JNB) + 280 Global PoPs'
    },
    features: [
      'Multi-zone Kubernetes auto-scaling',
      'Automated hourly failover snapshots',
      'Cloudflare Enterprise WAF & Layer 7 DDoS shield',
      'Dedicated Redis cluster & read replicas',
      '24/7 dedicated operations incident channel',
      'Zero-downtime rolling deploys'
    ]
  },
  {
    id: 'mission-critical',
    name: 'Nexus Dedicated',
    tagline: 'Bespoke hybrid infrastructure for FinTech, healthcare, and high-volume workloads',
    priceMonthly: 14900,
    priceAnnual: 12400,
    specs: {
      vCPU: '64 Bare-Metal Cores',
      ram: '128 GB DDR5 ECC',
      storage: '2 TB Raid-10 NVMe Storage',
      bandwidth: 'Unmetered 10Gbps Uplink',
      sla: '99.999% Fault-Tolerant SLA',
      edgeLocations: 'Direct Teraco JHB & CPT + 320 Edge PoPs'
    },
    features: [
      'Custom VPC with dedicated IP subnets',
      'POPIA & SOC2 Type II compliance documentation',
      'Autonomous AI agent load-balancing',
      'Multi-cloud fallback (AWS Cape Town + GCP redundancy)',
      '15-minute response time guarantee',
      'Dedicated Sandton lead DevOps architect'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Alexander Sterling',
    role: 'Founder & CEO',
    company: 'Sterling Capital Holdings',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    quote: 'Nova Nexus is not a typical agency—they are elite full-stack partners. They built our cross-platform mobile app and deployed our Kubernetes infrastructure with surgical precision.',
    metric: '+210% Trading Volume in 60 Days',
    projectType: 'Mobile App & Cloud Hosting'
  },
  {
    id: '2',
    name: 'Evelyn Morales',
    role: 'Chief Information Officer',
    company: 'BioVanguard Technologies',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
    quote: 'Their AI agent work is world-class. The custom autonomous agents they built for our clinical data ingestion cut 18 hours of manual audit work every single week.',
    metric: '92% Reduction in Processing Time',
    projectType: 'AI Systems & Custom Agents'
  },
  {
    id: '3',
    name: 'Tariq Al-Mansoor',
    role: 'Head of Growth',
    company: 'HyperLeap Commerce',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    quote: 'Our search traffic went from flatline to generating 45% of our top-line revenue after Nova Nexus revamped our technical SEO and web development stack.',
    metric: '+430% Organic Traffic Growth',
    projectType: 'Web Development & SEO'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Sarah Chen',
    role: 'Managing Partner & Principal Architect',
    specialty: 'Distributed Systems & Cloud Infrastructure',
    bio: 'Ex-Staff Infrastructure Engineer with 12+ years designing distributed systems handling billions of requests.',
    experience: '12+ Years'
  },
  {
    name: 'David K. Becker',
    role: 'Head of AI & Autonomous Systems',
    specialty: 'Applied Neural Networks & Agentic Workflows',
    bio: 'Specialized in multi-agent orchestration, LLM evaluation pipelines, and low-latency vector databases.',
    experience: '10+ Years'
  },
  {
    name: 'Amara Okafor',
    role: 'Director of Mobile & Interface Design',
    specialty: 'Cross-Platform React Native & Native UX',
    bio: 'Pioneered top-grossing apps featured across Apple App Store and Google Play Editor Picks.',
    experience: '9+ Years'
  },
  {
    name: 'Liam Vance',
    role: 'VP of Growth & Search Strategy',
    specialty: 'Programmatic SEO & Performance Marketing',
    bio: 'Helped 40+ scale-ups capture dominant organic rankings and build high-converting growth flywheels.',
    experience: '11+ Years'
  }
];

export const STATS = [
  { value: '99.99%', label: 'Cloud Uptime SLA', context: 'Across all managed server clusters' },
  { value: '250+', label: 'Shipped Systems', context: 'Web, mobile, AI & cloud deployments' },
  { value: '14ms', label: 'Median Edge Latency', context: 'Global Anycast CDN routing' },
  { value: '4.9/5', label: 'Client Satisfaction', context: 'From 80+ enterprise reviews' }
];

export const TECH_STACK_ITEMS = [
  { name: 'React 19', category: 'Frontend' },
  { name: 'Next.js', category: 'Full-Stack' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Flutter', category: 'Mobile' },
  { name: 'React Native', category: 'Mobile' },
  { name: 'AWS Cloud', category: 'DevOps' },
  { name: 'Google Cloud', category: 'Cloud' },
  { name: 'Kubernetes', category: 'Orchestration' },
  { name: 'Docker', category: 'Containers' },
  { name: 'Terraform', category: 'IaC' },
  { name: 'Gemini 2.5', category: 'AI Models' },
  { name: 'LangChain', category: 'Agentic AI' },
  { name: 'Python', category: 'AI / Backend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'pgvector', category: 'Vector Search' },
  { name: 'Cloudflare', category: 'Edge CDN' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'GraphQL', category: 'API' }
];

export const FAQS = [
  {
    question: 'How does Nova Nexus handle end-to-end development?',
    answer: 'We provide integrated delivery squads covering UX/UI design, full-stack web and mobile development, cloud hosting provisioning, and AI integrations. We work with bi-weekly sprint milestones, shared private Git repositories, and staging preview URLs for continuous feedback.'
  },
  {
    question: 'Can you migrate our existing infrastructure to high-availability cloud hosting?',
    answer: 'Yes. We specialize in zero-downtime database and server migrations to AWS, Google Cloud, or custom Kubernetes clusters. We configure automated CI/CD pipelines, WAF rules, and Cloudflare edge caching as part of every hosting onboarding.'
  },
  {
    question: 'What types of AI agents and custom AI systems do you develop?',
    answer: 'We build autonomous agent systems for customer support, document parsing, financial analysis, workflow automation, and internal knowledge search (RAG). Every system includes strict guardrails, latency optimization, and custom API connections.'
  },
  {
    question: 'Do you offer ongoing SLA support and maintenance after launch?',
    answer: 'Every project comes with a 30-day post-launch warranty, followed by optional 24/7 DevOps management, security patch updates, proactive monitoring, and continuous SEO optimization retainers.'
  },
  {
    question: 'How does the Project Cost Estimator work?',
    answer: 'Our interactive estimator lets you choose the exact services, scale, platform requirements, and timeline. It generates a realistic scope estimate and sends our architecture team your specifications for a verified fixed-price or sprint proposal within 24 hours.'
  }
];
