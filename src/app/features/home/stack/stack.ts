import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DataService } from '../../../core/services/data.service';

@Component({
  selector: 'app-stack',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './stack.html'
})
export class StackComponent {
  private readonly dataService = inject(DataService);

  protected readonly stackGroups = this.dataService.stack;
}
