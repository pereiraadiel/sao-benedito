import { IsBooleanString, IsOptional } from 'class-validator';

export class GetAllNoticesDTO {
  @IsOptional()
  @IsBooleanString()
  thisWeek?: boolean;

  @IsOptional()
  @IsBooleanString()
  thisMonth?: boolean;

  @IsOptional()
  @IsBooleanString()
  thisTrimester?: boolean;

  @IsOptional()
  @IsBooleanString()
  all?: boolean;
}
