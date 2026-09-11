import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { DataService } from '../../../core/services/data.service';
import { ScrollAnimateDirective } from '../../../shared/directives/scroll-animate.directive';
import { CursorGlowDirective } from '../../../shared/directives/cursor-glow.directive';

@Component({
  selector: 'app-education',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScrollAnimateDirective, CursorGlowDirective],
  templateUrl: './education.html'
})
export class EducationComponent {
  private readonly dataService = inject(DataService);

  protected readonly education = this.dataService.education;

  protected readonly degree = computed(() =>
    this.education().find(item => item.kind === 'degree')
  );

  protected readonly language = computed(() =>
    this.education().find(item => item.kind === 'language')
  );
}