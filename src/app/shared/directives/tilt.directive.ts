import { Directive, ElementRef, Inject, Input, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appTilt]',
  standalone: true
})
export class TiltDirective implements OnInit, OnDestroy {
  @Input() tiltMax = 5;
  @Input() tiltScale = 0.85;

  private readonly el: HTMLElement;
  private rafId = 0;
  private disposed = false;
  private cachedRect: DOMRect | null = null;
  private readonly browser: boolean;

  constructor(
    elementRef: ElementRef<HTMLElement>,
    @Inject(PLATFORM_ID) platformId: Object,
  ) {
    this.el = elementRef.nativeElement;
    this.browser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (!this.browser) return;
    this.el.addEventListener('pointerenter', this.onEnter);
    this.el.addEventListener('pointermove', this.onMove);
    this.el.addEventListener('pointerleave', this.onLeave);
  }

  ngOnDestroy() {
    this.disposed = true;
    if (this.browser) cancelAnimationFrame(this.rafId);
    this.el.removeEventListener('pointerenter', this.onEnter);
    this.el.removeEventListener('pointermove', this.onMove);
    this.el.removeEventListener('pointerleave', this.onLeave);
  }

  private reducedMotion(): boolean {
    return typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  private onEnter = (event: PointerEvent) => {
    if (event.pointerType !== 'mouse' || this.reducedMotion()) return;
    cancelAnimationFrame(this.rafId);
    this.cachedRect = this.el.getBoundingClientRect();
    this.rafId = requestAnimationFrame(() => {
      this.setTilt(event);
    });
  };

  private onMove = (event: PointerEvent) => {
    if (event.pointerType !== 'mouse' || this.reducedMotion()) return;
    cancelAnimationFrame(this.rafId);
    this.rafId = requestAnimationFrame(() => this.setTilt(event));
  };

  private onLeave = () => {
    if (this.reducedMotion()) return;
    cancelAnimationFrame(this.rafId);
    if (this.disposed) return;
    this.el.style.transition = 'transform 400ms cubic-bezier(0.22, 1, 0.36, 1)';
    this.rafId = requestAnimationFrame(() => {
      this.el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
      requestAnimationFrame(() => {
        if (!this.disposed) {
          this.el.style.transition = '';
          this.el.style.transform = '';
        }
      });
    });
  };

  private setTilt(event: PointerEvent) {
    const rect = this.cachedRect ?? this.el.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    const rotateY = (px * 2 - 1) * this.tiltMax * -1;
    const rotateX = (py * 2 - 1) * this.tiltMax;

    this.el.style.transform =
      `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale(${this.tiltScale})`;
  }
}