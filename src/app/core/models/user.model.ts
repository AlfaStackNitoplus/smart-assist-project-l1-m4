export interface User {
  userId: string;
  name: string;
  role: UserRole;
  email: string;
  password: string;
}
export enum UserRole {
  END_USER = 1,
  SUPPORT_ENGINEER = 2,
  SUPERVISOR = 3
}
