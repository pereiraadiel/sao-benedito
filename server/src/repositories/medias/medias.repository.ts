import { CreateMediaDAO } from '../../daos/medias/createMedia.dao';
import { MediaEntity } from '../../entities/media.entity';

export const MEDIAS_REPOSITORY = 'MEDIAS_REPOSITORY';

export interface MediasRepository {
  createOne(dao: CreateMediaDAO): Promise<MediaEntity>;
  getOneBtId(id: string): Promise<MediaEntity | null>;
}
