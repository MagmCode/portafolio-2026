import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  HostListener,
  OnChanges,
  SimpleChanges,
  AfterViewInit,
  OnDestroy
} from '@angular/core';
import { ProjectItem } from '../../models/portfolio.models';

@Component({
  selector: 'app-modal',
  imports: [CommonModule],
  templateUrl: './modal.html',
  styleUrls: ['./modal.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Modal implements OnChanges, AfterViewInit, OnDestroy {
  @Input() project: ProjectItem | null = null;
  @Output() closed = new EventEmitter<void>();
  @ViewChild('dialog') dialog?: ElementRef<HTMLElement>;

  private previouslyFocused?: HTMLElement | null;
  private mountedToBody = false;

  constructor(private hostRef: ElementRef<HTMLElement>) {}

  ngAfterViewInit() {
    try {
      if (this.hostRef?.nativeElement && this.hostRef.nativeElement.parentElement !== document.body) {
        document.body.appendChild(this.hostRef.nativeElement);
        this.mountedToBody = true;
      }
    } catch {}
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('project' in changes && this.project) {
      this.previouslyFocused = document.activeElement as HTMLElement | null;
      setTimeout(() => this.dialog?.nativeElement?.focus(), 0);
    }
  }

  ngOnDestroy() {
    if (this.mountedToBody && this.hostRef?.nativeElement?.parentElement === document.body) {
      document.body.removeChild(this.hostRef.nativeElement);
    }
  }

  close() {
    this.closed.emit();
    if (this.previouslyFocused) this.previouslyFocused.focus();
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      e.preventDefault();
      this.close();
    } else if (e.key === 'Tab') {
      this.trapTab(e);
    }
  }

  private trapTab(e: KeyboardEvent) {
    if (!this.dialog) return;
    const nodes = this.dialog.nativeElement.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    if (!nodes.length) { e.preventDefault(); return; }
    const first = nodes[0], last = nodes[nodes.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
}