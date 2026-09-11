import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';
import { DataService } from '../../../core/services/data.service';
import { ScrollAnimateDirective } from '../../../shared/directives/scroll-animate.directive';
import { CursorGlowDirective } from '../../../shared/directives/cursor-glow.directive';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScrollAnimateDirective, CursorGlowDirective, NgIconComponent],
  templateUrl: './contact.html'
})
export class ContactComponent {
  private readonly dataService = inject(DataService);

  protected readonly contact = this.dataService.contact;
}
