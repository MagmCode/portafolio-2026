import { Injectable, signal } from '@angular/core';
import { ContactInfo, ExperienceItem, ProjectItem, StackGroup } from '../../shared/models/portfolio.models';

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
      imageUrl: 'assets/projects/mockup_bank.png'
    },
    {
      title: 'Bookshelf App',
      description:
        'Aplicación móvil diseñada desde cero para la gestión de bibliotecas personales. Arquitectura enfocada en alto rendimiento y almacenamiento local eficiente.',
      technologies: ['Flutter', 'Dart', 'Isar DB'],
      githubUrl: '#',
      demoUrl: '#',
      status: 'Fase Beta',
      imageUrl: 'assets/projects/mockup_bookapp.png'
    },
    {
      title: 'Sistema de consulta de Polizas de Seguro',
      description:
        'Desarrollo full-stack para proyecto de grado universitario. Integración de una interfaz web dinámica con una API robusta y bases de datos relacionales.',
      technologies: ['Angular', 'Python', 'Django', 'PostgreSQL'],
      githubUrl: '#',
      demoUrl: '#',
      imageUrl: 'assets/projects/mockup_U.png'
    }
  ]);

  private readonly experienceState = signal<ExperienceItem[]>([
    {
      role: 'Frontend Developer Senior',
      period: '2023 - Actualidad',
      organization: 'Clientes Internacionales (Freelance)',
      summary: 'Liderazgo en el desarrollo de arquitecturas modernas y escalables con un enfoque integral en performance.',
      highlights: ['Lideré la migración de un sistema legado a Angular Standalone, reduciendo el bundle inicial en un 45%', 'Diseñé y desarrollé un Design System interno que aceleró el desarrollo de nuevas features en un 30%', 'Implementé estrategias avanzadas de caché y SSR, reduciendo el LCP a menos de 1.2s']
    },
    {
      role: 'Frontend Developer Mid',
      period: '2022 - 2023',
      organization: 'Estudio de Producto Digital',
      summary: 'Desarrollo de interfaces críticas y optimización del flujo de usuarios en plataformas SaaS.',
      highlights: ['Aumenté la tasa de retención un 15% mediante una profunda mejora en la usabilidad y navegación', 'Implementé testing automatizado logrando un 80% de cobertura en flujos de pago', 'Fui mentor de 2 desarrolladores junior y lideré sesiones de code review']
    },
    {
      role: 'Desarrollador Web Junior',
      period: '2020 - 2022',
      organization: 'Consultora de Software',
      summary: 'Participación en células ágiles entregando soluciones MVP para startups locales.',
      highlights: ['Participé en el desarrollo end-to-end de 4 productos web con Angular', 'Centralicé la documentación técnica del equipo mejorando el onboarding de nuevos miembros', 'Integré de paneles analíticos conectando APIs complejas']
    }
  ]);

  private readonly stackState = signal<StackGroup[]>([
    {
      title: 'Frontend Arquitecture',
      subtitle: 'Stack principal con dominio profundo',
      accent: 'primary',
      items: [
        { name: 'Angular 17+', icon: 'A', level: 'Avanzado' },
        { name: 'Tailwind CSS', icon: 'T', level: 'Avanzado' },
        { name: 'TypeScript', icon: 'TS', level: 'Avanzado' },
        { name: 'RxJS / NgRx', icon: 'R', level: 'Avanzado' },
        { name: 'Sass / SCSS', icon: 'S', level: 'Avanzado' }
      ]
    },
    {
      title: 'Despliegues y Backend',
      subtitle: 'Visión completa del ciclo de vida',
      accent: 'secondary',
      items: [
        { name: 'Node.js', icon: 'N', level: 'Intermedio' },
        { name: 'SQL / NoSQL', icon: 'DB', level: 'Intermedio' },
        { name: 'Git / GitHub Act.', icon: 'G', level: 'Avanzado' },
        { name: 'Docker', icon: 'DK', level: 'Intermedio' }
      ]
    },
    {
      title: 'UX / Herramientas',
      subtitle: 'Alineación con el diseño y producto',
      accent: 'tertiary',
      items: [
        { name: 'Figma', icon: 'F', level: 'Avanzado' },
        { name: 'Lighthouse', icon: 'L', level: 'Avanzado' },
        { name: 'Jest / Jasmine', icon: 'J', level: 'Intermedio' }
      ]
    }
  ]);

  private readonly contactState = signal<ContactInfo>({
    email: 'maria.guedez@example.com',
    phone: '+58 412 1234567',
    whatsapp: 'https://wa.me/584121234567',
    linkedin: 'https://linkedin.com/in/mariaguedez',
    github: 'https://github.com/mariaguedez'
  });

  readonly projects = this.projectsState.asReadonly();
  readonly experience = this.experienceState.asReadonly();
  readonly stack = this.stackState.asReadonly();
  readonly contact = this.contactState.asReadonly();
}
