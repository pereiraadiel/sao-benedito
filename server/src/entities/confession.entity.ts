import { DayEnum } from '../enums/day.enum';
import { CommunityEntity } from './community.entity';
import { Entity } from './entity';

export class ConfessionEntity extends Entity {
  initialTime: string;
  finalTime: string;
  day: DayEnum;

  community: CommunityEntity;

  constructor(entity: ConfessionEntity, id?: string) {
    super(entity, id);
    Object.assign(this, entity);
  }
}
