import { v4 as UUID } from 'uuid';

export class Entity {
  id: string;
  createdAt: Date;
  updatedAt?: Date;

  constructor(entity: Omit<Entity, 'id' | 'createdAt'>, id?: string) {
    Object.assign(this, {
      ...entity,
      id,
    });

    if (!this.id) {
      this.id = UUID().replaceAll('-', '');
    }

    if (!this.createdAt) {
      this.createdAt = new Date();
    }
  }
}
