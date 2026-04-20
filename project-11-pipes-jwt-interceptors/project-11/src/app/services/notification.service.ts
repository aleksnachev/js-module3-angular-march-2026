import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Notification1 } from '../interfaces/notification.interface.js';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notificationSubject = new Subject<Notification1>();
  notification$ = this.notificationSubject.asObservable();

  show(notification: Notification1): void {
    this.notificationSubject.next({
      duration: 3000,
      ...notification,
    });
  }

  success(message: string): void {
    this.show({ type: 'success', message });
  }
  error(message: string): void {
    this.show({ type: 'error', message, duration: 5000 });
  }
  info(message: string): void {
    this.show({ type: 'info', message });
  }
  warning(message: string): void {
    this.show({ type: 'warning', message, duration: 4000 });
  }
}
