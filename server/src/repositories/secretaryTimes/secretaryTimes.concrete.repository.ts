import { Injectable } from '@nestjs/common';
import { SecretaryTimesRepository } from './secretaryTimes.repository';
import { CreateOneSecretaryTimeDAO } from '../../daos/secretaryTimes/createOneSecretaryTime.dao';
import { UpdateOneSecretaryTimeDAO } from '../../daos/secretaryTimes/updateOneSecretaryTime.dao';
import { SecretaryTimeEntity } from '../../entities/secretaryTime.entity';
import { PrismaService } from '../../services/prisma.service';

@Injectable()
export class SecretaryTimesConcreteRepository
  implements SecretaryTimesRepository
{
  constructor(private readonly database: PrismaService) {}

  async createOne(
    dao: CreateOneSecretaryTimeDAO,
  ): Promise<SecretaryTimeEntity> {
    const entity = new SecretaryTimeEntity(dao);
    delete (entity as any).communityId;

    const secretaryTime = await this.database.secretaryTime.create({
      data: {
        ...entity,
        community: {
          connect: {
            id: dao.communityId,
          },
        },
      },
      include: {
        community: {
          select: {
            id: true,
            name: true,
            description: true,
          },
        },
      },
    });

    return secretaryTime as unknown as SecretaryTimeEntity;
  }

  async findOneId(id: string): Promise<SecretaryTimeEntity> {
    const secretaryTime = await this.database.secretaryTime.findUnique({
      where: {
        id,
      },
      include: {
        community: {
          select: {
            id: true,
            name: true,
            description: true,
          },
        },
      },
    });

    return secretaryTime as unknown as SecretaryTimeEntity;
  }

  async findMany(): Promise<SecretaryTimeEntity[]> {
    const secretaryTimes = await this.database.secretaryTime.findMany({
      include: {
        community: {
          select: {
            id: true,
            name: true,
            description: true,
          },
        },
      },
    });
    return secretaryTimes as unknown as SecretaryTimeEntity[];
  }

  async updateOne(
    dao: UpdateOneSecretaryTimeDAO,
  ): Promise<SecretaryTimeEntity> {
    const updateDao = {
      day: dao.day,
      initialTime: dao.initialTime,
      finalTime: dao.finalTime,
      id: undefined,
      communityId: undefined,
      updatedAt: new Date(),
    };

    const secretaryTime = await this.database.secretaryTime.update({
      where: {
        id: dao.id,
      },
      data: updateDao,
      include: {
        community: {
          select: {
            id: true,
            name: true,
            description: true,
          },
        },
      },
    });

    return secretaryTime as unknown as SecretaryTimeEntity;
  }

  async deleteOneById(id: string): Promise<void> {
    await this.database.secretaryTime.delete({
      where: {
        id,
      },
    });
  }
}
