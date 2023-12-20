import { RoleEnum } from '../enums/role.enum';
import { Entity } from './entity';

export class UserEntity extends Entity {
  firstName: string;
  lastName: string;
  cpf: string;
  email: string;
  phone: string;
  passwordHash: string;
  role: RoleEnum;

  constructor(entity: Omit<UserEntity, 'id' | 'createdAt'>, id?: string) {
    super(entity, id);
    Object.assign(this, entity);
  }
}
