import { RoleEnum } from '../../enums/role.enum';

export interface UpdateOneUserDAO {
  id: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  cpf?: string;
  phone?: string;
  passwordHash?: string;
  role?: RoleEnum;
}
