import { RoleEnum } from '../../enums/role.enum';

export interface CreateOneUserDAO {
  firstName: string;
  lastName: string;
  cpf: string;
  email: string;
  passwordHash: string;
  phone: string;
  role: RoleEnum;
}
