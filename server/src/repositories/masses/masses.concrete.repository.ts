import { Injectable } from '@nestjs/common';
import { MassesRepository } from './masses.repository';
import { CreateOneMassDAO } from '../../daos/masses/createOneMass.dao';
import { UpdateOneMassDAO } from '../../daos/masses/updateOneMass.dao';
import { MassEntity } from '../../entities/mass.entity';
import { PrismaService } from '../../services/prisma.service';
import { GetAllMassesDAO } from '../../daos/masses/getAllMasses.dao';

@Injectable()
export class MassesConcreteRepository implements MassesRepository {
  constructor(private readonly database: PrismaService) {}

  async createOne(dao: CreateOneMassDAO): Promise<MassEntity> {
    const entity = new MassEntity(dao);
    delete (entity as any).communityId;

    const mass = await this.database.mass.create({
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

    return mass as unknown as MassEntity;
  }

  async findOneId(id: string): Promise<MassEntity> {
    const mass = await this.database.mass.findUnique({
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

    return mass as unknown as MassEntity;
  }

  async findMany(dao: GetAllMassesDAO): Promise<MassEntity[]> {
    const masses = await this.database.mass.findMany({
      include: {
        community: {
          select: {
            id: true,
            name: true,
            description: true,
          },
        },
      },
      where: {
        community: dao.communityId
          ? {
              id: {
                equals: dao.communityId,
              },
            }
          : undefined,
      },
    });
    return masses as unknown as MassEntity[];
  }

  async updateOne(dao: UpdateOneMassDAO): Promise<MassEntity> {
    const updateDao = {
      day: dao.day,
      time: dao.time,
      title: dao.title,
      id: undefined,
      communityId: undefined,
      updatedAt: new Date(),
    };

    const mass = await this.database.mass.update({
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

    return mass as unknown as MassEntity;
  }

  async deleteOneById(id: string): Promise<void> {
    await this.database.mass.delete({
      where: {
        id,
      },
    });
  }
}
