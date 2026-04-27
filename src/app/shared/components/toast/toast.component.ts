import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div *ngIf="toast.visible()" class="fixed bottom-5 left-1/2 -translate-x-1/2 z-50">
      <div class="max-w-sm w-full bg-primary-500/20 border border-primary-500/20 backdrop-blur-2xl rounded-xl p-4 shadow-2xl"
           style="animation: fadeInUp .45s ease-in-out forwards;">
        <div class="flex items-center gap-3">
          <div class="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
          </div>
          <div>
            <div class="text-white text-sm">{{ toast.message() || '¡Copiado!' }}</div>
            <p class="text-xs text-neutral-200">Correo copiado al portapapeles</p>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ToastComponent {
  toast = inject(ToastService);
}
