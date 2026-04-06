import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DataService } from '../../../core/services/data.service';
import { ScrollAnimateDirective } from '../../../shared/directives/scroll-animate.directive';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScrollAnimateDirective],
  templateUrl: './contact.html'
})
export class ContactComponent {
  private readonly dataService = inject(DataService);

  protected readonly contact = this.dataService.contact;
}
