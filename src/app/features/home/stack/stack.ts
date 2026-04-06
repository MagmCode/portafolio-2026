import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DataService } from '../../../core/services/data.service';
import { ScrollAnimateDirective } from '../../../shared/directives/scroll-animate.directive';

@Component({
  selector: 'app-stack',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScrollAnimateDirective],
  templateUrl: './stack.html'
})
export class StackComponent {
  private readonly dataService = inject(DataService);

  protected readonly stackGroups = this.dataService.stack;
}
