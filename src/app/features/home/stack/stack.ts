import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DataService } from '../../../core/services/data.service';
import { ScrollAnimateDirective } from '../../../shared/directives/scroll-animate.directive';
import { CursorGlowDirective } from '../../../shared/directives/cursor-glow.directive';

interface MarqueeItem {
  name: string;
  logoUrl: string;
  color: string;
}

@Component({
  selector: 'app-stack',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScrollAnimateDirective, CursorGlowDirective],
  templateUrl: './stack.html'
})
export class StackComponent {
  private readonly dataService = inject(DataService);

  protected readonly stackGroups = this.dataService.stack;

  protected readonly marqueeItems: MarqueeItem[] = [
    { name: 'Angular', logoUrl: 'https://angular.io/assets/images/logos/angular/angular.svg', color: '#c3002f' },
    { name: 'TypeScript', logoUrl: 'https://cdn.simpleicons.org/typescript', color: '#3178c6' },
    { name: 'JavaScript', logoUrl: 'https://cdn.simpleicons.org/javascript', color: '#f7df1e' },
    { name: 'HTML5', logoUrl: 'https://cdn.simpleicons.org/html5', color: '#e34f26' },
    { name: 'CSS3', logoUrl: 'https://cdn.simpleicons.org/css3', color: '#1572b6' },
    { name: 'Tailwind CSS', logoUrl: 'https://cdn.simpleicons.org/tailwindcss', color: '#06b6d4' },
    { name: 'Spring Boot', logoUrl: 'https://www.google.com/s2/favicons?domain=spring.io&sz=64', color: '#6db33f' },
    { name: 'Django', logoUrl: 'https://www.google.com/s2/favicons?domain=djangoproject.com&sz=64', color: '#092e20' },
    { name: 'PostgreSQL', logoUrl: 'https://cdn.simpleicons.org/postgresql', color: '#336791' },
    { name: 'MySQL', logoUrl: 'https://www.google.com/s2/favicons?domain=mysql.com&sz=64', color: '#4479a1' },
    { name: 'Oracle', logoUrl: 'https://www.google.com/s2/favicons?domain=oracle.com&sz=64', color: '#f80000' },
    { name: 'APIs REST', logoUrl: 'https://cdn.simpleicons.org/postman', color: '#ff6c37' },
    { name: 'Git', logoUrl: 'https://cdn.simpleicons.org/git', color: '#f05032' },
    { name: 'GitHub', logoUrl: 'https://cdn.simpleicons.org/github', color: '#ffffff' },
    { name: 'GitLab', logoUrl: 'https://cdn.simpleicons.org/gitlab', color: '#fc6d26' },
    { name: 'Docker', logoUrl: 'https://cdn.simpleicons.org/docker', color: '#2496ed' },
    { name: 'Jira', logoUrl: 'https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/jira.png', color: '#0052cc' },
    { name: 'Flutter', logoUrl: 'https://cdn.simpleicons.org/flutter', color: '#02569b' },
    { name: 'Dart', logoUrl: 'https://cdn.simpleicons.org/dart', color: '#0175c2' },
    { name: 'Sass', logoUrl: 'https://cdn.simpleicons.org/sass', color: '#cc6699' },
  ];

  protected onLogoError(event: Event, item: MarqueeItem) {
    const img = event.target as HTMLImageElement;
    if (!img || img.dataset['fallback']) return;
    img.dataset['fallback'] = '1';

    const monogram = item.name.replace(/[^A-Za-z]/g, '').slice(0, 2).toUpperCase() || item.name.slice(0, 2).toUpperCase();
    const holder = document.createElement('span');
    holder.className = 'logo-fallback flex h-7 w-7 items-center justify-center text-[11px] font-bold';
    holder.style.color = item.color;
    holder.textContent = monogram;
    img.replaceWith(holder);
  }
}