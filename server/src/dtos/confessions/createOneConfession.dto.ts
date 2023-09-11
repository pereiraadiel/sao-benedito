import { IsEnum, IsHexadecimal, IsNotEmpty, Length } from 'class-validator';
import { DayEnum } from '../../enums/day.enum';

export class CreateOneConfessionDTO {
  @IsNotEmpty()
  @IsEnum(DayEnum)
  day: DayEnum;

  @IsNotEmpty()
  @Length(2, 8)
  initialTime: string;

  @IsNotEmpty()
  @Length(2, 8)
  finalTime: string;

  @IsNotEmpty()
  @IsHexadecimal()
  @Length(32, 32)
  communityId: string;
}
