export enum Role {
  SuperAdmin = 'superadmin',
  Admin = 'admin',
  User = 'user'
}

export const getRoleAuthorityLevel = (role: Role): number => {
  switch (role) {
    case Role.SuperAdmin: return 0;
    case Role.Admin: return 1;
    case Role.User: return 2;
    default: return 9999;
  }
}