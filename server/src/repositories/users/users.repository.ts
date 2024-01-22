import { CreateOneUserDAO } from '../../daos/users/createOneUser.dao';
import { UpdateOneUserDAO } from '../../daos/users/updateOneUser.dao';
import { UserEntity } from '../../entities/user.entity';

export const USERS_REPOSITORY = 'USERS_REPOSITORY';

export interface UsersRepository {
  createOne(data: CreateOneUserDAO): Promise<UserEntity>;
  findOneById(id: string): Promise<UserEntity | null>;
  findOneByEmail(email: string): Promise<UserEntity | null>;
  findOneByCpf(cpf: string): Promise<UserEntity | null>;
  updateOne(data: UpdateOneUserDAO): Promise<UserEntity | null>;
}
