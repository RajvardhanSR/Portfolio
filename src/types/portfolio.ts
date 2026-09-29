export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  summary: string;
  technologies: string[];
  bulletPoints: string[];
  pipelineSteps?: {
    name: string;
    description: string;
    type: 'input' | 'process' | 'decision' | 'loop' | 'output';
  }[];
  caseStudy: {
    problem: string;
    approach: string;
    architecture: string[];
    implementation: string[];
    results: string[];
  };
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  workflowSteps: string[];
  details: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
  description: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  year: string;
  cgpa?: string;
  field?: string;
}

export interface CertificationItem {
  title: string;
  issuer?: string;
  period?: string;
  inProgress?: boolean;
  badgeUrl?: string;
  verificationUrl?: string;
}
