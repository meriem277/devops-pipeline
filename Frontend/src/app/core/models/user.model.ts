// user.model.ts
export interface User {
  id: number;
  fullName: string;
  email: string;
  role: 'ADMIN'|'MEMBER'|'MANAGER';
}
