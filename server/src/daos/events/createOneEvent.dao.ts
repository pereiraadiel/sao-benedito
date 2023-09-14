import { MediaEntity } from '../../entities/media.entity';

export class CreateOneEventDAO {
  initialDate: Date;
  finalDate: Date;
  title: string;
  description: string;
  medias?: MediaEntity[];
  communityId: string;
}
