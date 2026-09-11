import { Injectable, signal } from '@angular/core';
import { ContactInfo, EducationItem, ExperienceItem, ProjectItem, StackGroup } from '../../shared/models/portfolio.models';

@Injectable({ providedIn: 'root' })
export class DataService {
  private readonly projectsState = signal<ProjectItem[]>([
    {
      title: 'Migración de Plataforma Bancaria',
      description:
        'Refactorización de sistema legado hacia una arquitectura moderna, escalable y segura, optimizando el rendimiento y la mantenibilidad del código.',
      technologies: ['Angular', 'NobleUI', 'Tailwind CSS'],
      githubUrl: '#',
      demoUrl: '#',
      confidential: true,
      challenges: 'Transformar un sistema crítico legado cuya lógica de presentación estaba fuertemente acoplada al backend (Java 8 / Foundation 2). El objetivo era desacoplar el Frontend para ganar escalabilidad y agilidad en el desarrollo.',
      solutions: 'Lideré la migración de vistas y flujos complejos hacia Angular 14, implementando una arquitectura basada en componentes reutilizables sobre NobleUI. No fue solo un cambio visual; se rediseñó la experiencia del usuario (UX) para homologar procesos y optimizar los tiempos de operación, manteniendo un look & feel corporativo estrictamente personalizado.',
      imageUrl: 'assets/projects/mockup_bank.png'
    },
    {
      title: 'Bookshelf App',
      description:
        'Aplicación móvil diseñada desde cero para la gestión de bibliotecas personales. Arquitectura enfocada en alto rendimiento y almacenamiento local eficiente.',
      technologies: ['Flutter', 'Dart', 'Isar DB'],
      githubUrl: 'https://github.com/MagmCode/book_tracker',
      demoUrl: '#',
      confidential: false,
      status: 'Fase Beta',
      imageUrl: 'assets/projects/mockup_bookapp.png'
    },
    {
      title: 'Sistema de consulta de Polizas de Seguro',
      description:
        'Desarrollo full-stack para proyecto de grado universitario, orientado a un corredor de seguros. Integración de una interfaz web dinámica con una API robusta y bases de datos relacionales.',
      technologies: ['Angular', 'Django', 'PostgreSQL'],
      githubUrl: 'https://github.com/MagmCode/seguros-project',
      demoUrl: 'https://automatizacionpolizas.netlify.app/',
      confidential: false,
      imageUrl: 'assets/projects/mockup_U.png'
    }
  ]);

  private readonly experienceState = signal<ExperienceItem[]>([
    {
      role: 'Especialista Tecnológico',
      period: 'Ene 2026 - Presente',
      organization: 'Emac Tech Solutions',
      summary: 'Liderazgo en el desarrollo y la arquitectura frontend del ecosistema Angular para módulos financieros y de tesorería.',
      highlights: [
        'Diseño y desarrollo de flujos de transacciones corporativas y gestión de divisas de alta criticidad.',
        'Integración estrecha con el equipo backend para el consumo y pruebas de APIs REST.',
        'Arquitectura de componentes reutilizables y estándares de rendimiento sobre Angular.'
      ]
    },
    {
      role: 'Especialista Tecnológico',
      period: 'Ago 2024 - Nov 2025',
      organization: 'H-Tec Consulting | Banco de Venezuela',
      summary: 'Desarrollo y mantenimiento de componentes frontend para la plataforma bancaria, con foco en operaciones cambiarias y tesorería.',
      highlights: [
        'Implementación de flujos bajo estrictos estándares de seguridad y accesibilidad.',
        'Depuración de flujos y diagnósticos en bases de datos relacionales para validar consistencia transaccional.',
        'Optimización de procesos de cambio y tesorería en la banca en línea.'
      ]
    },
    {
      role: 'Analista de Sistemas',
      period: 'Mar 2023 - Ago 2024',
      organization: 'IPSFANB',
      summary: 'Levantamiento de requerimientos técnicos, soporte a sistemas institucionales y desarrollo de interfaces de usuario.',
      highlights: [
        'Elaboración de requerimientos funcionales y técnicos junto a usuarios internos.',
        'Soporte y mantenimiento de módulos web institucionales.',
        'Desarrollo de interfaces para el mantenimiento continuo de los sistemas.'
      ]
    }
  ]);

  private readonly stackState = signal<StackGroup[]>([
    {
      title: 'Frontend',
      subtitle: 'Desarrollo de interfaces modernas y accesibles',
      accent: 'primary',
      items: [
        { name: 'Angular (v12 - v22)', icon: 'A' },
        { name: 'TypeScript', icon: 'TS' },
        { name: 'JavaScript', icon: 'JS' },
        { name: 'HTML5', icon: 'H' },
        { name: 'CSS3', icon: 'C' },
        { name: 'Tailwind CSS', icon: 'T' }
      ]
    },
    {
      title: 'Backend y Bases de Datos',
      subtitle: 'Integración con servicios y sistemas relacionales',
      accent: 'secondary',
      items: [
        { name: 'Spring Boot', icon: 'SB' },
        { name: 'Django', icon: 'DJ' },
        { name: 'PostgreSQL', icon: 'PG' },
        { name: 'MySQL', icon: 'MY' },
        { name: 'Oracle', icon: 'OR' },
        { name: 'APIs REST', icon: 'API' }
      ]
    },
    {
      title: 'Herramientas y Metodologías',
      subtitle: 'Flujo de trabajo profesional y ágil',
      accent: 'tertiary',
      items: [
        { name: 'Git / GitHub / GitLab', icon: 'G' },
        { name: 'Docker', icon: 'DK' },
        { name: 'Jira · Scrum / Kanban', icon: 'J' },
        { name: 'Pruebas de endpoints', icon: 'E' }
      ]
    }
  ]);

  private readonly educationState = signal<EducationItem[]>([
    {
      kind: 'degree',
      title: 'Ingeniería en Informática',
      institution: 'Universidad Experimental de la Gran Caracas (UNEXCA)',
      period: '2021 - 2026',
      description: 'Formación universitaria en ingeniería enfocada en desarrollo de software, bases de datos e infraestructura tecnológica.',
      badge: 'Grado universitario'
    },
    {
      kind: 'language',
      title: 'Inglés Avanzado — Nivel C1',
      institution: 'Centro Venezolano Americano (CVA)',
      period: '120 horas acreditadas',
      description: 'Programa de inglés bilingüe con dominio profesional del idioma para entornos técnicos y corporativos.',
      badge: 'Bilingüe',
      progress: 85
    }
  ]);

  private readonly contactState = signal<ContactInfo>({
    email: 'mariaaguedez.08@gmail.com',
    phone: '+58 412 2887873',
    whatsapp: 'https://wa.me/584122887873',
    linkedin: 'https://www.linkedin.com/in/maria-guedez-code',
    github: 'https://github.com/MagmCode'
  });

  readonly projects = this.projectsState.asReadonly();
  readonly experience = this.experienceState.asReadonly();
  readonly stack = this.stackState.asReadonly();
  readonly education = this.educationState.asReadonly();
  readonly contact = this.contactState.asReadonly();
}