import { Injectable } from '@angular/core';
import { BaseCrudService } from '../crud/base-crud.service';
import { ApiService } from '../http/api.service';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserService extends BaseCrudService<User> {
  constructor(api: ApiService) { super(api, '/users'); }

  search(q: string) {
    return this.list({ q }).pipe(
      map(users => users.filter(u =>
        u.fullName.toLowerCase().includes(q.toLowerCase()) ||
        u.email.toLowerCase().includes(q.toLowerCase())
      ))
    );
  }
}
