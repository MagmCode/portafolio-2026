export interface TechItem {
  name: string;
  icon: string;
  level: string;
}

export interface StackGroup {
  title: string;
  subtitle: string;
  accent: 'primary' | 'secondary' | 'tertiary';
  items: TechItem[];
}

export interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  status?: string;
}

export interface ExperienceItem {
  role: string;
  period: string;
  organization: string;
  summary: string;
  highlights: string[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp: string;
  linkedin: string;
  github: string;
}
