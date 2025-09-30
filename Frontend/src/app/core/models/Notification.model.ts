import { User } from "./user.model";

// notification.model.ts
export interface Notification {
  id: number;
  content: string;
  isRead: boolean;
  recipient: User;
  createdAt: string;
}
