import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';

interface NavItem {
  label: string;
  href: string;
}

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIconComponent],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class NavbarComponent {
  protected readonly isMenuOpen = signal(false);

  protected readonly navItems: NavItem[] = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Stack', href: '#stack' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Contacto', href: '#contacto' }
  ];

  protected toggleMenu(): void {
    this.isMenuOpen.update((value) => !value);
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
