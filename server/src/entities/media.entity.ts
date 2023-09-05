import { Entity } from './entity';

export class MediaEntity extends Entity {
  constructor(entity: MediaEntity, id?: string) {
    super(entity, id);
    Object.assign(this, entity);
  }
}
