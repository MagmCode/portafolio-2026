import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToastService {
  private _message = signal<string | null>(null);
  message = this._message;

  private _visible = signal(false);
  visible = this._visible;

  show(message: string, duration = 3000) {
    if (!message) return;
    this._message.set(message);
    this._visible.set(true);
    setTimeout(() => {
      this._visible.set(false);
      this._message.set(null);
    }, duration);
  }

  hide() {
    this._visible.set(false);
    this._message.set(null);
  }
}
