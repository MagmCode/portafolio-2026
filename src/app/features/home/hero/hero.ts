import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, inject, OnDestroy, PLATFORM_ID, signal } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';
import { ScrollAnimateDirective } from '../../../shared/directives/scroll-animate.directive';
import { TiltDirective } from '../../../shared/directives/tilt.directive';
import { ToastService } from '../../../shared/services/toast.service';
import { TypewriterTerminalComponent } from '../../../shared/components/typewriter-terminal/typewriter-terminal';

@Component({
  selector: 'app-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, NgIconComponent, ScrollAnimateDirective, TiltDirective],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss'],
})
export class HeroComponent implements OnDestroy {
  yearsOfExperience = new Date().getFullYear() - 2023;
  private toast = inject(ToastService);

  protected readonly kickerWords = ['¡Hola! Yo soy', 'Bienvenido, yo soy'];
  protected readonly kicker = signal('');
  protected readonly kickerCaret = signal(false);

  private kickerTimers: number[] = [];
  private kickerDestroyed = false;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.kicker.set(this.kickerWords[0]);
      return;
    }
    this.runKickerLoop(0);
  }

  private runKickerLoop(wordIndex: number) {
    const word = this.kickerWords[wordIndex % this.kickerWords.length];

    // Type
    for (let i = 1; i <= word.length; i++) {
      this.kickerTimers.push(window.setTimeout(() => {
        if (this.kickerDestroyed) return;
        this.kicker.set(word.slice(0, i));
        this.kickerCaret.set(true);
      }, i * 42));
    }

    const typeDone = word.length * 42;

    // Hold with caret blinking
    this.kickerTimers.push(window.setTimeout(() => {
      if (this.kickerDestroyed) return;
      this.kickerCaret.set(false);
    }, typeDone + 1900));

    // Delete
    for (let i = 0; i < word.length; i++) {
      this.kickerTimers.push(window.setTimeout(() => {
        if (this.kickerDestroyed) return;
        this.kicker.set(word.slice(0, word.length - 1 - i));
        this.kickerCaret.set(true);
      }, typeDone + 2600 + i * 26));
    }

    // Next word
    this.kickerTimers.push(window.setTimeout(() => {
      if (this.kickerDestroyed) return;
      this.kicker.set('');
      this.runKickerLoop(wordIndex + 1);
    }, typeDone + 2600 + word.length * 26 + 400));
  }

  ngOnDestroy() {
    this.kickerDestroyed = true;
    this.kickerTimers.forEach(t => window.clearTimeout(t));
  }

  copyEmail(email: string) {
    if (!email) return;

    navigator.clipboard.writeText(email).then(() => {
      this.toast.show('¡Copiado!');
    }).catch(err => {
      console.error('Error al copiar:', err);
    });
  }
}