import { UserRole } from "./user.model";

export interface RoleMenuMapping {
  role: UserRole;
  menuIds: number[];
}
