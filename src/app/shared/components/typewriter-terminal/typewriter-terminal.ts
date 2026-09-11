import { ChangeDetectionStrategy, Component, ElementRef, Inject, OnDestroy, PLATFORM_ID, AfterViewInit, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface TerminalCommand {
  command: string;
  output: string;
  typeSpeed: number;
  outputDelay: number;
  readTime: number;
}

@Component({
  selector: 'app-typewriter-terminal',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './typewriter-terminal.html',
  styleUrl: './typewriter-terminal.scss',
})
export class TypewriterTerminalComponent implements AfterViewInit, OnDestroy {
  protected readonly typedLine = signal('');
  protected readonly output = signal('');
  protected readonly commandIndex = signal(0);
  protected readonly typing = signal(false);
  protected readonly started = signal(false);

  protected readonly commands: TerminalCommand[] = [
    { command: 'whoami', output: 'Maria Guedez — Ing. de Software', typeSpeed: 110, outputDelay: 450, readTime: 3200 },
    { command: 'stack', output: 'Angular · TypeScript · Tailwind', typeSpeed: 75, outputDelay: 450, readTime: 3000 },
    { command: 'status', output: 'Disponible para proyectos', typeSpeed: 90, outputDelay: 450, readTime: 3400 },
  ];

  private observer?: IntersectionObserver;
  private timers: number[] = [];
  private letterTimers: number[] = [];
  private destroyed = false;

  constructor(
    private readonly elementRef: ElementRef<HTMLElement>,
    @Inject(PLATFORM_ID) private readonly platformId: Object,
  ) {}

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    if (typeof IntersectionObserver === 'undefined') return;

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.destroyed && !this.started()) {
          this.started.set(true);
          this.startLoop();
          this.observer?.disconnect();
          this.observer = undefined;
        }
      });
    }, { threshold: 0.3 });
    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy() {
    this.destroyed = true;
    this.timers.forEach(t => clearTimeout(t));
    this.letterTimers.forEach(t => clearTimeout(t));
    this.observer?.disconnect();
  }

  private startLoop() {
    if (this.destroyed) return;
    this.runCommand(0);
  }

  private runCommand(index: number) {
    if (this.destroyed) return;

    this.commandIndex.set(index);
    this.typedLine.set('');
    this.output.set('');
    this.typing.set(true);

    const cmd = this.commands[index];

    // 1) Type the command slowly and human-like
    const typeChar = (i: number) => {
      if (this.destroyed) return;
      if (i <= cmd.command.length) {
        this.typedLine.set(cmd.command.slice(0, i));
        const variance = Math.random() * 0.6 + 0.7;
        this.letterTimers.push(window.setTimeout(() => typeChar(i + 1), cmd.typeSpeed * variance));
      } else {
        this.typing.set(false);
        // 2) Show the output after a breath
        this.timers.push(window.setTimeout(() => {
          if (this.destroyed) return;
          this.output.set(cmd.output);
          // 3) Read it for a while, then clear and loop
          this.timers.push(window.setTimeout(() => {
            if (this.destroyed) return;
            this.typedLine.set('');
            this.output.set('');
            const next = (index + 1) % this.commands.length;
            this.timers.push(window.setTimeout(() => this.runCommand(next), 500));
          }, cmd.readTime));
        }, cmd.outputDelay));
      }
    };
    typeChar(1);
  }
}