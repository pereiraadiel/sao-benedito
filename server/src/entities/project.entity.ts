import { CommunityEntity } from './community.entity';
import { Entity } from './entity';
import { MediaEntity } from './media.entity';

export class ProjectEntity extends Entity {
  title: string;
  description: string;
  finishedIn?: Date;

  medias: MediaEntity[];
  community: CommunityEntity;

  constructor(entity: ProjectEntity, id?: string) {
    super(entity, id);
    Object.assign(this, entity);

    if (!this.medias) this.medias = [];
  }
}
