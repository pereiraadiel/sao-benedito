import { IsDateString, IsOptional, Length } from 'class-validator';

export class UpdateOneProjectDTO {
  @IsOptional()
  @Length(5, 255)
  title?: string;

  @IsOptional()
  @Length(5, 255)
  description?: string;

  @IsOptional()
  @IsDateString({
    strict: true,
  })
  finishedIn?: Date;

  id?: string;
}
