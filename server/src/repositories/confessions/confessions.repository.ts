import { CreateOneConfessionDAO } from './../../daos/confessions/createOneConfession.dao';
import { ConfessionEntity } from '../../entities/confession.entity';
import { UpdateOneConfessionDAO } from '../../daos/confessions/updateOneConfession.dao';

export const CONFESSIONS_REPOSITORY = 'CONFESSIONS_REPOSITORY';

export interface ConfessionsRepository {
  createOne(dao: CreateOneConfessionDAO): Promise<ConfessionEntity>;
  findOneId(id: string): Promise<ConfessionEntity | null>;
  findMany(): Promise<ConfessionEntity[]>;
  updateOne(dao: UpdateOneConfessionDAO): Promise<ConfessionEntity | null>;
  deleteOneById(id: string): Promise<void>;
}
