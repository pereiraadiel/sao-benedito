import { DayEnum } from '../enums/day.enum';
import { CommunityEntity } from './community.entity';
import { Entity } from './entity';

export class MassEntity extends Entity {
  title: string;
  time: string;
  day: DayEnum;

  community: CommunityEntity;

  constructor(entity: MassEntity, id?: string) {
    super(entity, id);
    Object.assign(this, entity);
  }
}
