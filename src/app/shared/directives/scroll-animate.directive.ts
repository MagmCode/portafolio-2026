import { Directive, ElementRef, OnInit, OnDestroy, Renderer2, Inject, PLATFORM_ID, Input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type ScrollFade = 'up' | 'right' | 'left' | 'none';

@Directive({
  selector: '[appScrollAnimate]',
  standalone: true
})
export class ScrollAnimateDirective implements OnInit, OnDestroy {
  private observer: IntersectionObserver | undefined;
  private revealed = false;

  @Input() fade: ScrollFade = 'up';
  @Input() delay = 0;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  ngOnInit() {
    // Only run animation/observer in the browser (avoid SSR errors)
    if (!isPlatformBrowser(this.platformId)) return;

    if (typeof IntersectionObserver === 'undefined') return;

    // Respect "prefers-reduced-motion": keep content visible, no effect.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    if (this.fade !== 'none') {
      this.renderer.addClass(this.el.nativeElement, this.initialClass());
    }
    this.renderer.addClass(this.el.nativeElement, 'opacity-0');
    this.renderer.addClass(this.el.nativeElement, 'transition-opacity');
    this.renderer.addClass(this.el.nativeElement, 'transition-transform');

    this.renderer.setStyle(this.el.nativeElement, 'transition-duration', '800ms');
    this.renderer.setStyle(this.el.nativeElement, 'transition-timing-function', 'cubic-bezier(0.22, 1, 0.36, 1)');
    if (this.delay > 0) {
      this.renderer.setStyle(this.el.nativeElement, 'transition-delay', `${this.delay}ms`);
    }

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.revealed) {
          this.reveal();
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    this.observer.observe(this.el.nativeElement);
  }

  private initialClass(): string {
    switch (this.fade) {
      case 'right': return '-translate-x-8';
      case 'left': return 'translate-x-8';
      default: return 'translate-y-8';
    }
  }

  private reveal() {
    if (this.revealed) return;
    this.revealed = true;

    const el = this.el.nativeElement;
    this.renderer.removeClass(el, 'opacity-0');
    this.renderer.addClass(el, 'opacity-100');

    switch (this.fade) {
      case 'up':
        this.renderer.removeClass(el, 'translate-y-8');
        this.renderer.addClass(el, 'translate-y-0');
        break;
      case 'right':
        this.renderer.removeClass(el, '-translate-x-8');
        this.renderer.removeClass(el, 'translate-y-8');
        this.renderer.addClass(el, 'translate-x-0');
        this.renderer.addClass(el, 'translate-y-0');
        break;
      case 'left':
        this.renderer.removeClass(el, 'translate-x-8');
        this.renderer.removeClass(el, 'translate-y-8');
        this.renderer.addClass(el, '-translate-x-0');
        this.renderer.addClass(el, 'translate-y-0');
        break;
    }

    this.observer?.unobserve(el);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}