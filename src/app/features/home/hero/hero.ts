import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';
import { ScrollAnimateDirective } from '../../../shared/directives/scroll-animate.directive';
import { ToastService } from '../../../shared/services/toast.service';
import { ToastComponent } from '../../../shared/components/toast/toast.component';

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
  private toast = inject(ToastService);

  copyEmail(email: string) {
    if (!email) return;

    navigator.clipboard.writeText(email).then(() => {
      this.toast.show('¡Copiado!');
    }).catch(err => {
      console.error('Error al copiar:', err);
    });
  }
}