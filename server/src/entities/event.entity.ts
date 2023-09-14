import { CommunityEntity } from './community.entity';
import { Entity } from './entity';
import { MediaEntity } from './media.entity';

export class EventEntity extends Entity {
  title: string;
  description: string;
  initialDate: Date;
  finalDate: Date;

  medias?: MediaEntity[];
  community?: CommunityEntity;

  constructor(entity: Omit<EventEntity, 'id' | 'createdAt'>, id?: string) {
    super(entity, id);
    Object.assign(this, entity);

    if (!this.medias) this.medias = [];
  }
}
