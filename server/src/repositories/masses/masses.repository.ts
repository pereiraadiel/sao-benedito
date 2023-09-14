import { CreateOneMassDAO } from './../../daos/masses/createOneMass.dao';
import { MassEntity } from '../../entities/mass.entity';
import { UpdateOneMassDAO } from '../../daos/masses/updateOneMass.dao';
import { GetAllMassesDAO } from '../../daos/masses/getAllMasses.dao';

export const MASSES_REPOSITORY = 'MASSES_REPOSITORY';

export interface MassesRepository {
  createOne(dao: CreateOneMassDAO): Promise<MassEntity>;
  findOneId(id: string): Promise<MassEntity | null>;
  findMany(dao: GetAllMassesDAO): Promise<MassEntity[]>;
  updateOne(dao: UpdateOneMassDAO): Promise<MassEntity | null>;
  deleteOneById(id: string): Promise<void>;
}
