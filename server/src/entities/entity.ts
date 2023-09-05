import { v4 as UUID } from 'uuid';

export class Entity {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;

  constructor(entity: Entity, id?: string) {
    Object.assign(this, {
      ...entity,
      id,
    });

    if (!this.id) {
      this.id = UUID();
    }

    if (!this.createdAt) {
      this.createdAt = new Date();
    }
  }
}
