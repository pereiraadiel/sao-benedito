import { SetMetadata } from '@nestjs/common';
import { RoleEnum } from '../enums/role.enum';

export const ROLE_KEY = 'role';
export const Role = (role: RoleEnum | RoleEnum[]) =>
  SetMetadata(ROLE_KEY, role);
