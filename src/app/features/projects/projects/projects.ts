import { ChangeDetectionStrategy, Component, HostListener, inject, signal } from '@angular/core';
import { DataService } from '../../../core/services/data.service';
import { ScrollAnimateDirective } from '../../../shared/directives/scroll-animate.directive';
import { ProjectItem } from '../../../shared/models/portfolio.models';
import { Modal } from '../../../shared/components/modal/modal';

@Component({
  selector: 'app-projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScrollAnimateDirective, Modal],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {
  private readonly dataService = inject(DataService);

 readonly projects = this.dataService.projects;

  readonly selectedProject = signal<ProjectItem | null>(null);
  openDetails(p: ProjectItem) { this.selectedProject.set(p); }
  closeDetails() { this.selectedProject.set(null); }
}
