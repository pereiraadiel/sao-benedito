import { CreateOneEventDAO } from './../../daos/events/createOneEvent.dao';
import { EventEntity } from '../../entities/event.entity';
import { UpdateOneEventDAO } from '../../daos/events/updateOneEvent.dao';
import { GetAllEventsDAO } from '../../daos/events/getAllEvents.dao';

export const EVENTS_REPOSITORY = 'EVENTS_REPOSITORY';

export interface EventsRepository {
  createOne(dao: CreateOneEventDAO): Promise<EventEntity>;
  findOneId(id: string): Promise<EventEntity | null>;
  findMany(dao: GetAllEventsDAO): Promise<EventEntity[]>;
  updateOne(dao: UpdateOneEventDAO): Promise<EventEntity | null>;
  deleteOneById(id: string): Promise<void>;
}
