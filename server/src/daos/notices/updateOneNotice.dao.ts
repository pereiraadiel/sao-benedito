import { DeviceAgentEnum } from '../../enums/deviceAgent.enum'

export class UpdateOneNoticeDAO {
  altText?: string;
  source?: string;
  deviceAgent?: DeviceAgentEnum;
  finalDate?: Date;
  id: string;
}
