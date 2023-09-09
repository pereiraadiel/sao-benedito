import { CreateOneCommunityDAO } from './../../daos/communities/createOneCommunity.dao';
import { CommunityEntity } from '../../entities/community.entity';
import { UpdateOneCommunityDAO } from '../../daos/communities/updateOneCommunity.dao';

export const COMMUNITIES_REPOSITORY = 'COMMUNITIES_REPOSITORY';

export interface CommunitiesRepository {
  createOne(dao: CreateOneCommunityDAO): Promise<CommunityEntity>;
  findOneId(id: string): Promise<CommunityEntity | null>;
  findMany(): Promise<CommunityEntity[]>;
  updateOne(dao: UpdateOneCommunityDAO): Promise<CommunityEntity | null>;
  deleteOneById(id: string): Promise<void>;
}
