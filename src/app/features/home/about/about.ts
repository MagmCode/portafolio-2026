import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../../shared/directives/scroll-animate.directive';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScrollAnimateDirective],
  templateUrl: './about.html'
})
export class AboutComponent {}
