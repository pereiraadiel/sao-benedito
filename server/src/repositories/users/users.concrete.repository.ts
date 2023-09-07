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

  async findOneById(id: string): Promise<UserEntity> {
    const data = await this.database.user.findUnique({
      where: {
        id,
      },
    });
    return data;
  }

  async findOneByEmail(email: string): Promise<UserEntity> {
    const data = await this.database.user.findUnique({
      where: {
        email,
      },
    });
    return data;
  }

  async findOneByCpf(cpf: string): Promise<UserEntity> {
    const data = await this.database.user.findUnique({
      where: {
        cpf,
      },
    });
    return data;
  }

  async updateOne(dao: UpdateOneUserDAO): Promise<UserEntity> {
    const updateDao = {
      ...dao,
      id: undefined,
      updatedAt: new Date(),
    };

    const data = await this.database.user.update({
      where: {
        id: dao.id,
      },
      data: updateDao,
    });

    return data;
  }
}
