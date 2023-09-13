import { CreateOneSecretaryTimeDAO } from './../../daos/secretaryTimes/createOneSecretaryTime.dao';
import { SecretaryTimeEntity } from '../../entities/secretaryTime.entity';
import { UpdateOneSecretaryTimeDAO } from '../../daos/secretaryTimes/updateOneSecretaryTime.dao';

export const SECRETARY_TIMES_REPOSITORY = 'SECRETARY_TIMES_REPOSITORY';

export interface SecretaryTimesRepository {
  createOne(dao: CreateOneSecretaryTimeDAO): Promise<SecretaryTimeEntity>;
  findOneId(id: string): Promise<SecretaryTimeEntity | null>;
  findMany(): Promise<SecretaryTimeEntity[]>;
  updateOne(
    dao: UpdateOneSecretaryTimeDAO,
  ): Promise<SecretaryTimeEntity | null>;
  deleteOneById(id: string): Promise<void>;
}
