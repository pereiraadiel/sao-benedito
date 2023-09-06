import { Injectable } from '@nestjs/common';
import { CreateOneUserDAO } from '../../daos/users/createOneUser.dao';
import { UpdateOneUserDAO } from '../../daos/users/updateOneUser.dao';
import { UserEntity } from '../../entities/user.entity';
import { PrismaService } from '../../services/prisma.service';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersConcreteRepository implements UsersRepository {
  constructor(private readonly database: PrismaService) {}

  async createOne(dao: CreateOneUserDAO): Promise<UserEntity> {
    const data = await this.database.user.create({
      data: new UserEntity(dao),
    });

    return data;
  }
  findOneById(id: string): Promise<UserEntity> {
    console.warn(id);
    throw new Error('Method not implemented.');
  }
  findOneByEmail(email: string): Promise<UserEntity> {
    console.warn(email);
    throw new Error('Method not implemented.');
  }
  findOneByCpf(cpf: string): Promise<UserEntity> {
    console.warn(cpf);
    throw new Error('Method not implemented.');
  }
  updateOne(data: UpdateOneUserDAO): Promise<UserEntity> {
    console.warn(data);
    throw new Error('Method not implemented.');
  }
}
