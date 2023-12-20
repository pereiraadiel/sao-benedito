export const RoleEnum = {
  super: 'Super',
  admin: 'Admin',
  priest: 'Priest',
  common: 'Common',
} as const;

export type RoleEnum = (typeof RoleEnum)[keyof typeof RoleEnum];
