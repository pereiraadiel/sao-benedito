import { Entity } from './entity';

export class NoticeEntity extends Entity {
  title: string;
  description: string;
  coverImageUrl: string;
  notifyFrom: Date;
  notifyUntil: Date;

  constructor(entity: NoticeEntity, id?: string) {
    super(entity, id);
    Object.assign(this, entity);
  }
}
