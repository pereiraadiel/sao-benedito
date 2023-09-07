export interface UpdateOneUserDAO {
  id: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  cpf?: string;
  phone?: string;
  passwordHash?: string;
}
