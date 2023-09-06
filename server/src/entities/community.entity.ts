import { ConfessionEntity } from './confession.entity';
import { Entity } from './entity';
import { MassEntity } from './mass.entity';
import { SecretaryTimeEntity } from './secretaryTime.entity';

export class CommunityEntity extends Entity {
  name: string;
  description: string;
  email: string;
  phone: string;
  history?: string;
  addressStreet: string;
  addressDistrict: string;
  addressMapLink: string;

  masses: MassEntity[];
  confessions: ConfessionEntity[];
  secretaryTimes: SecretaryTimeEntity[];

  constructor(entity: Omit<CommunityEntity, 'id' | 'createdAt'>, id?: string) {
    super(entity, id);
    Object.assign(this, entity);

    if (!this.masses) this.masses = [];
    if (!this.confessions) this.confessions = [];
    if (!this.secretaryTimes) this.secretaryTimes = [];
  }
}
