import { IsDateString, IsEnum, IsNotEmpty, MinLength } from 'class-validator';
import { DeviceAgentEnum } from '../../enums/deviceAgent.enum';

export class CreateOneNoticeDTO {
  @IsNotEmpty()
  @MinLength(5)
  altText: string;

  @IsNotEmpty()
  @MinLength(3)
  source: string;

  @IsEnum(DeviceAgentEnum)
  deviceAgent: DeviceAgentEnum;

  @IsNotEmpty()
  @IsDateString({
    strict: true,
  })
  finalDate: Date;
}
