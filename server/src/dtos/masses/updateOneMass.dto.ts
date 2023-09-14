import { IsEnum, IsOptional, Length } from 'class-validator';
import { DayEnum } from '../../enums/day.enum';

export class UpdateOneMassDTO {
  @IsOptional()
  @Length(2, 8)
  time?: string;

  @IsOptional()
  @Length(5, 255)
  title?: string;

  @IsOptional()
  @IsEnum(DayEnum)
  day?: DayEnum;

  id?: string;
}
