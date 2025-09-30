import { Injectable } from '@angular/core';
import { BaseCrudService } from '../crud/base-crud.service';
import { ApiService } from '../http/api.service';
import { Notification } from '../models/Notification.model';

@Injectable({ providedIn: 'root' })
export class NotificationService extends BaseCrudService<Notification> {
  constructor(api: ApiService) { super(api, '/notifications'); }

  // GET /notifications/me
  myNotifications() {
    return this.api.http.get<Notification[]>(this.api.url('/notifications/me'));
  }

  // PATCH /notifications/{id} { isRead: true }
  markRead(id: number) {
    return this.patch(id, { isRead: true });
  }
}
