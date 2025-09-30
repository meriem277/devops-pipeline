import { Injectable } from '@angular/core';
import { BaseCrudService } from '../crud/base-crud.service';
import { ApiService } from '../http/api.service';
import { Task, TaskStatus } from '../models/task.model';

@Injectable({ providedIn: 'root' })
export class TaskService extends BaseCrudService<Task> {
  constructor(api: ApiService) { super(api, '/tasks'); }

  // GET /projects/{projectId}/tasks
  listByProject(projectId: number) {
    return this.api.http.get<Task[]>(this.api.url(`/projects/${projectId}/tasks`));
  }

  // POST /projects/{projectId}/tasks
  createForProject(projectId: number, t: Partial<Task>) {
    return this.api.http.post<Task>(this.api.url(`/projects/${projectId}/tasks`), t);
  }

  // PATCH /tasks/{id} { status }
  updateStatus(id: number, status: TaskStatus) {
    return this.patch(id, { status });
  }

  // PATCH /tasks/{id} { assignedTo: {id} }
  assignTo(id: number, userId: number) {
    return this.patch(id, { assignedTo: { id: userId } as any });
  }
}
