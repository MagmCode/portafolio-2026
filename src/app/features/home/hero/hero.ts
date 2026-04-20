import { NgOptimizedImage } from '@angular/common'; // Eliminamos NgIf
import { ChangeDetectionStrategy, Component, signal } from '@angular/core'; // Usaremos Signals para Angular 21
import { NgIconComponent } from '@ng-icons/core';
import { ScrollAnimateDirective } from '../../../shared/directives/scroll-animate.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, NgIconComponent, ScrollAnimateDirective],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss'],
})
export class HeroComponent {
  yearsOfExperience = new Date().getFullYear() - 2022;

  showToast = signal(false);

  copyEmail(email: string) {
    if (!email) return;

    navigator.clipboard.writeText(email).then(() => {
      this.showToast.set(true);
      setTimeout(() => this.showToast.set(false), 3000);
    }).catch(err => {
      console.error('Error al copiar:', err);
    });
  }
}