import { Injectable } from '@angular/core';
import { BaseCrudService } from '../crud/base-crud.service';
import { ApiService } from '../http/api.service';
import { Project } from '../models/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectService extends BaseCrudService<Project> {
  constructor(api: ApiService) { super(api, '/projects'); }

  // ex: GET /projects?ownerId=1
  listByOwner(ownerId: number) {
    return this.list({ ownerId });
  }

  // ex: POST /projects/{id}/members
  addMember(projectId: number, userId: number) {
    return this.api.http.post<void>(this.api.url(`/projects/${projectId}/members`), { userId });
  }
}
