import { Injectable, signal } from '@angular/core';
import { ContactInfo, ExperienceItem, ProjectItem, StackGroup } from '../../shared/models/portfolio.models';

@Injectable({ providedIn: 'root' })
export class DataService {
  private readonly projectsState = signal<ProjectItem[]>([
    {
      title: 'Dashboard Analitico',
      description:
        'Aplicacion frontend construida con Angular y Tailwind para visualizar metricas en tiempo real con componentes reutilizables.',
      technologies: ['Angular', 'Tailwind CSS', 'TypeScript'],
      githubUrl: '#',
      demoUrl: '#'
    },
    {
      title: 'E-commerce UI Kit',
      description:
        'Plataforma de comercio electronico con catalogo, filtros y checkout modular usando Angular Material y Bootstrap.',
      technologies: ['Angular Material', 'Bootstrap', 'RxJS'],
      githubUrl: '#',
      demoUrl: '#'
    },
    {
      title: 'Mobile Companion (en progreso)',
      description:
        'Aplicacion movil en aprendizaje construida con Flutter y Dart para complementar experiencias web.',
      technologies: ['Flutter', 'Dart', 'REST API'],
      githubUrl: '#',
      demoUrl: '#',
      status: 'Actualmente en aprendizaje'
    }
  ]);

  private readonly experienceState = signal<ExperienceItem[]>([
    {
      role: 'Frontend Developer Freelance',
      period: '2023 - Actualidad',
      organization: 'Clientes internacionales',
      summary: 'Desarrollo de interfaces escalables enfocadas en performance y accesibilidad.',
      highlights: ['Creacion de componentes reutilizables', 'Integracion con APIs REST', 'Mejora de UX mobile-first']
    },
    {
      role: 'Pasante en Desarrollo Web',
      period: '2022 - 2023',
      organization: 'Estudio Digital',
      summary: 'Maquetacion y desarrollo de vistas con enfoque en consistencia visual.',
      highlights: ['Implementacion con Angular y Bootstrap', 'Refactor de estilos compartidos', 'Soporte en pruebas funcionales']
    },
    {
      role: 'Proyectos Universitarios y Open Source',
      period: '2021 - 2022',
      organization: 'Comunidad tecnica',
      summary: 'Participacion en equipos colaborativos para productos academicos y comunitarios.',
      highlights: ['Sistemas CRUD con Django', 'Paneles administrativos en Angular', 'Documentacion tecnica y mentoring']
    }
  ]);

  private readonly stackState = signal<StackGroup[]>([
    {
      title: 'Frontend (experta)',
      subtitle: 'Stack principal para interfaces modernas',
      accent: 'primary',
      items: [
        { name: 'Angular', icon: 'A', level: 'Avanzado' },
        { name: 'Tailwind CSS', icon: 'T', level: 'Avanzado' },
        { name: 'Angular Material', icon: 'M', level: 'Avanzado' },
        { name: 'Bootstrap', icon: 'B', level: 'Intermedio alto' },
        { name: 'NobleUI', icon: 'N', level: 'Intermedio' }
      ]
    },
    {
      title: 'Otros conocimientos',
      subtitle: 'Backend y bases de datos',
      accent: 'secondary',
      items: [
        { name: 'MySQL', icon: 'SQL', level: 'Intermedio' },
        { name: 'PostgreSQL', icon: 'PG', level: 'Intermedio' },
        { name: 'MariaDB', icon: 'MDB', level: 'Intermedio' },
        { name: 'Django', icon: 'DJ', level: 'Intermedio' },
        { name: 'Spring Boot', icon: 'SB', level: 'Intermedio' }
      ]
    },
    {
      title: 'En aprendizaje',
      subtitle: 'Expansion hacia mobile',
      accent: 'tertiary',
      items: [
        { name: 'Flutter', icon: 'F', level: 'En progreso' },
        { name: 'Dart', icon: 'D', level: 'En progreso' }
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
