import type { UserRole } from "@/types/user";

const ROLE_PERMISSIONS: Record<UserRole, string[]> = {
  learner: [
    "view:lessons", "complete:lessons",
    "use:grammar", "use:email", "use:pronunciation",
    "view:interview", "view:profile", "edit:own-profile",
  ],
  admin: [
    "view:lessons", "complete:lessons",
    "use:grammar", "use:email", "use:pronunciation",
    "view:interview", "view:profile", "edit:own-profile",
    "view:admin-dashboard", "manage:users",
    "manage:content", "view:analytics",
  ],
};

export function hasPermission(role: UserRole, permission: string): boolean {
  return ROLE_PERMISSIONS[role]?.includes(permission) ?? false;
}

export function requireRole(
  userRole: UserRole,
  requiredRole: UserRole
): boolean {
  const hierarchy: Record<UserRole, number> = { learner: 0, admin: 1 };
  return hierarchy[userRole] >= hierarchy[requiredRole];
}
