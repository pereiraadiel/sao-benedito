import { MediaTypeEnum } from '../enums/mediaType.enum';
import { Entity } from './entity';

export class MediaEntity extends Entity {
  source: string;
  type: MediaTypeEnum;
  alternativeText: string;

  constructor(entity: Omit<MediaEntity, 'id' | 'createdAt'>, id?: string) {
    super(entity, id);
    Object.assign(this, entity);
  }
}
