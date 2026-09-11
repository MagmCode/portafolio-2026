import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIconComponent],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterComponent {
  year = new Date().getFullYear();
  private readonly dataService = inject(DataService);

  protected readonly contact = this.dataService.contact;

  protected readonly navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Stack', href: '#stack' },
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Educación', href: '#educacion' },
    { label: 'Contacto', href: '#contacto' },
  ];
}