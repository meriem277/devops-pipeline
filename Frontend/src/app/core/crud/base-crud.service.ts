import { ApiService } from '../http/api.service';
import { HttpParams } from '@angular/common/http';

export class BaseCrudService<T> {
  constructor(protected api: ApiService, protected path: string) {}

  list(params?: Record<string, any>) {
    let p = new HttpParams();
    Object.entries(params ?? {}).forEach(([k,v]) => { if (v!=null) p = p.set(k, v); });
    return this.api.http.get<T[]>(this.api.url(this.path), { params: p });
  }

  get(id: number) {
    return this.api.http.get<T>(this.api.url(`${this.path}/${id}`));
  }

  create(payload: Partial<T>) {
    return this.api.http.post<T>(this.api.url(this.path), payload);
  }

  update(id: number, payload: Partial<T>) {
    return this.api.http.put<T>(this.api.url(`${this.path}/${id}`), payload);
  }

  patch(id: number, payload: Partial<T>) {
    return this.api.http.patch<T>(this.api.url(`${this.path}/${id}`), payload);
  }

  remove(id: number) {
    return this.api.http.delete<void>(this.api.url(`${this.path}/${id}`));
  }
}
