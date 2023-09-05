import { Entity } from './entity';

export class UserEntity extends Entity {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;

  constructor(entity: UserEntity, id?: string) {
    super(entity, id);
    Object.assign(this, entity);
  }
}
