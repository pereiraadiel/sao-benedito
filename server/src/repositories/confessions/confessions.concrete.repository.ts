import { Injectable } from '@nestjs/common';
import { ConfessionsRepository } from './confessions.repository';
import { CreateOneConfessionDAO } from '../../daos/confessions/createOneConfession.dao';
import { UpdateOneConfessionDAO } from '../../daos/confessions/updateOneConfession.dao';
import { ConfessionEntity } from '../../entities/confession.entity';
import { PrismaService } from '../../services/prisma.service';

@Injectable()
export class ConfessionsConcreteRepository implements ConfessionsRepository {
  constructor(private readonly database: PrismaService) {}

  async createOne(dao: CreateOneConfessionDAO): Promise<ConfessionEntity> {
    const entity = new ConfessionEntity(dao);
    delete (entity as any).communityId;

    const confession = await this.database.confession.create({
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

    return confession as unknown as ConfessionEntity;
  }

  async findOneId(id: string): Promise<ConfessionEntity> {
    const confession = await this.database.confession.findUnique({
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

    return confession as unknown as ConfessionEntity;
  }

  async findMany(): Promise<ConfessionEntity[]> {
    const confessions = await this.database.confession.findMany({
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
    return confessions as unknown as ConfessionEntity[];
  }

  async updateOne(dao: UpdateOneConfessionDAO): Promise<ConfessionEntity> {
    const updateDao = {
      day: dao.day,
      initialTime: dao.initialTime,
      finalTime: dao.finalTime,
      id: undefined,
      communityId: undefined,
      updatedAt: new Date(),
    };

    const confession = await this.database.confession.update({
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

    return confession as unknown as ConfessionEntity;
  }

  async deleteOneById(id: string): Promise<void> {
    await this.database.confession.delete({
      where: {
        id,
      },
    });
  }
}
