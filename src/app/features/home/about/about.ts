import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../../shared/directives/scroll-animate.directive';
import { CursorGlowDirective } from '../../../shared/directives/cursor-glow.directive';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScrollAnimateDirective, CursorGlowDirective],
  templateUrl: './about.html'
})
export class AboutComponent {}
