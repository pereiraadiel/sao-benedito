import { IsEnum, IsOptional, Length } from 'class-validator';
import { DayEnum } from '../../enums/day.enum';

export class UpdateOneSecretaryTimeDTO {
  @IsOptional()
  @Length(2, 8)
  initialTime?: string;

  @IsOptional()
  @Length(2, 8)
  finalTime?: string;

  @IsOptional()
  @IsEnum(DayEnum)
  day?: DayEnum;

  id?: string;
}
