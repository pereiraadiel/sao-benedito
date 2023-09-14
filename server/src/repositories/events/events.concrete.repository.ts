import { Injectable } from '@nestjs/common';
import { EventsRepository } from './events.repository';
import { CreateOneEventDAO } from '../../daos/events/createOneEvent.dao';
import { UpdateOneEventDAO } from '../../daos/events/updateOneEvent.dao';
import { EventEntity } from '../../entities/event.entity';
import { PrismaService } from '../../services/prisma.service';
import { GetAllEventsDAO } from '../../daos/events/getAllEvents.dao';

@Injectable()
export class EventsConcreteRepository implements EventsRepository {
  constructor(private readonly database: PrismaService) {}

  async createOne(dao: CreateOneEventDAO): Promise<EventEntity> {
    const entity = new EventEntity(dao);
    delete (entity as any).communityId;

    const event = await this.database.event.create({
      data: {
        ...entity,
        medias: undefined,
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

    return event as unknown as EventEntity;
  }

  async findOneId(id: string): Promise<EventEntity> {
    const event = await this.database.event.findUnique({
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

    return event as unknown as EventEntity;
  }

  async findMany(dao: GetAllEventsDAO): Promise<EventEntity[]> {
    const events = await this.database.event.findMany({
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
    return events as unknown as EventEntity[];
  }

  async updateOne(dao: UpdateOneEventDAO): Promise<EventEntity> {
    const updateDao = {
      finalDate: dao.finalDate,
      initialDate: dao.initialDate,
      title: dao.title,
      description: dao.description,
      id: undefined,
      communityId: undefined,
      updatedAt: new Date(),
    };

    const event = await this.database.event.update({
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

    return event as unknown as EventEntity;
  }

  async deleteOneById(id: string): Promise<void> {
    await this.database.event.delete({
      where: {
        id,
      },
    });
  }
}
