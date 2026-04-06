import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DataService } from '../../../core/services/data.service';
import { ScrollAnimateDirective } from '../../../shared/directives/scroll-animate.directive';

@Component({
  selector: 'app-projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScrollAnimateDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent {
  private readonly dataService = inject(DataService);

  protected readonly projects = this.dataService.projects;
}
