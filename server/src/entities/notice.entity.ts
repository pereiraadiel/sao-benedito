import { DeviceAgentEnum } from '../enums/deviceAgent.enum';
import { Entity } from './entity';

export class NoticeEntity extends Entity {
  altText: string;
  source: string;
  deviceAgent: DeviceAgentEnum;
  finalDate: Date;

  constructor(entity: Omit<NoticeEntity, 'id' | 'createdAt'>, id?: string) {
    super(entity, id);
    Object.assign(this, entity);
  }
}
