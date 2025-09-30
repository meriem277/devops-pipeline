import { Project } from "./project.model";
import { User } from "./user.model";

// task.model.ts
export type TaskStatus = 'TODO'|'IN_PROGRESS'|'DONE';

export interface Task {
  id: number;
  title: string;
  description?: string;
  status: TaskStatus;
  priority?: 'LOW'|'MEDIUM'|'HIGH';
  dueDate?: string;
  project?: Project;
  assignedTo?: User;
}
