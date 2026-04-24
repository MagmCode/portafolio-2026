import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';
import { NgOptimizedImage } from "@angular/common";

interface NavItem {
  label: string;
  href: string;
}

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIconComponent, NgOptimizedImage],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class NavbarComponent {
  protected readonly isMenuOpen = signal(false);

  protected readonly navItems: NavItem[] = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Stack', href: '#stack' },
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Contacto', href: '#contacto' }
  ];

  protected toggleMenu(): void {
    this.isMenuOpen.update((value) => !value);
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
