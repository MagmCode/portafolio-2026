import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AboutComponent } from '../about/about';
import { ContactComponent } from '../contact/contact';
import { ExperienceComponent } from '../experience/experience';
import { HeroComponent } from '../hero/hero';
import { ProjectsComponent } from '../../projects/projects/projects';
import { StackComponent } from '../stack/stack';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HeroComponent, AboutComponent, StackComponent, ProjectsComponent, ExperienceComponent, ContactComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {}
