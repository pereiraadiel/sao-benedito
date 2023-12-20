import { IsDateString, IsEnum, IsOptional, MinLength } from 'class-validator';
import { DeviceAgentEnum } from '../../enums/deviceAgent.enum';

export class UpdateOneNoticeDTO {
  @IsOptional()
  @MinLength(5)
  altText?: string;

  @IsOptional()
  @MinLength(3)
  source?: string;

  @IsOptional()
  @IsEnum(DeviceAgentEnum)
  deviceAgent?: DeviceAgentEnum;

  @IsOptional()
  @IsDateString({
    strict: true,
  })
  finalDate?: Date;

  id?: string;
}
