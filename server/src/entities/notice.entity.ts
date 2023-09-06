import { Entity } from './entity';

export class NoticeEntity extends Entity {
  title: string;
  description: string;
  coverImageUrl: string;
  notifyFrom: Date;
  notifyUntil: Date;

  constructor(entity: Omit<NoticeEntity, 'id' | 'createdAt'>, id?: string) {
    super(entity, id);
    Object.assign(this, entity);
  }
}
