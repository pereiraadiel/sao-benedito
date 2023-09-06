import { MediaTypeEnum } from '../enums/mediaType.enum';
import { Entity } from './entity';
import { EventEntity } from './event.entity';

export class MediaEntity extends Entity {
  source: string;
  type: MediaTypeEnum;
  alternativeText: string;
  event?: EventEntity;

  constructor(entity: Omit<MediaEntity, 'id' | 'createdAt'>, id?: string) {
    super(entity, id);
    Object.assign(this, entity);
  }
}
