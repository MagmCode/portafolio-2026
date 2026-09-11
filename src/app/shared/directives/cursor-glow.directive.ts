import { Directive, ElementRef, Inject, Input, OnDestroy, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appCursorGlow]',
  standalone: true
})
export class CursorGlowDirective implements OnInit, OnDestroy {
  @Input() glowClass = 'cursor-glow';

  private readonly host: HTMLElement;
  private readonly renderer: Renderer2;
  private glow?: HTMLElement;
  private pointerInside = false;
  private disposed = false;

  constructor(
    elementRef: ElementRef<HTMLElement>,
    renderer: Renderer2,
    @Inject(PLATFORM_ID) private readonly platformId: Object,
  ) {
    this.host = elementRef.nativeElement;
    this.renderer = renderer;
  }

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    if (typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const glow = this.renderer.createElement('span');
    this.renderer.addClass(glow, this.glowClass);
    this.renderer.setAttribute(glow, 'aria-hidden', 'true');
    this.renderer.appendChild(this.host, glow);
    this.glow = glow;

    this.host.addEventListener('pointerenter', this.onEnter);
    this.host.addEventListener('pointermove', this.onMove);
    this.host.addEventListener('pointerleave', this.onLeave);
  }

  ngOnDestroy() {
    this.disposed = true;
    this.host.removeEventListener('pointerenter', this.onEnter);
    this.host.removeEventListener('pointermove', this.onMove);
    this.host.removeEventListener('pointerleave', this.onLeave);
    if (this.glow && this.glow.parentNode === this.host) {
      this.renderer.removeChild(this.host, this.glow);
    }
  }

  private onEnter = () => {
    if (!this.glow || this.disposed) return;
    this.pointerInside = true;
    this.glow.style.transition = 'opacity 260ms ease';
    this.glow.style.opacity = '1';
  };

  private onMove = (event: PointerEvent) => {
    if (!this.glow || !this.pointerInside || this.disposed) return;
    const rect = this.host.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    this.glow.style.transition = 'none';
    this.glow.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
  };

  private onLeave = () => {
    if (!this.glow || this.disposed) return;
    this.pointerInside = false;
    this.glow.style.transition = 'opacity 320ms ease';
    this.glow.style.opacity = '0';
  };
}