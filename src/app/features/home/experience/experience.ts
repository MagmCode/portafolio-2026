import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DataService } from '../../../core/services/data.service';
import { ScrollAnimateDirective } from '../../../shared/directives/scroll-animate.directive';

@Component({
  selector: 'app-experience',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScrollAnimateDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class ExperienceComponent {
  private readonly dataService = inject(DataService);

  protected readonly experience = this.dataService.experience;
}
