import { IsEnum } from 'class-validator';
import { RoleEnum } from '../../enums/role.enum';

export class AssignUserRoleDTO {
  @IsEnum(RoleEnum)
  role: RoleEnum;

  id?: string;
}
