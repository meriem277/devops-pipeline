import { User } from "./user.model";

// project.model.ts
export interface Project {
  id: number;
  projectName: string;
  description?: string;
  owner?: User;
  members?: User[];
}
