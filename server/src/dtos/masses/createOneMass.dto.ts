import { IsEnum, IsHexadecimal, IsNotEmpty, Length } from 'class-validator';
import { DayEnum } from '../../enums/day.enum';

export class CreateOneMassDTO {
  @IsNotEmpty()
  @IsEnum(DayEnum)
  day: DayEnum;

  @IsNotEmpty()
  @Length(2, 8)
  time: string;

  @IsNotEmpty()
  @Length(5, 255)
  title: string;

  @IsNotEmpty()
  @IsHexadecimal()
  @Length(32, 32)
  communityId: string;
}
