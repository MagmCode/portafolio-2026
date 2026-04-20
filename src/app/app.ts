import { AfterViewInit, ChangeDetectionStrategy, Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './core/layout/footer/footer';
import { NavbarComponent } from './core/layout/navbar/navbar';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    
    requestAnimationFrame(() => {
      const el = document.getElementById('inicio');
      if (el) el.scrollIntoView({ behavior: 'auto', block: 'start' });
    });
  }
}
  