import { MediaEntity } from '../../entities/media.entity';

export class CreateOneProjectDAO {
  title: string;
  description: string;
  finishedIn?: Date;
  medias?: MediaEntity[];
  communityId: string;
}
