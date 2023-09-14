import { IsDateString, IsOptional, Length } from 'class-validator';

export class UpdateOneEventDTO {
  @IsOptional()
  @IsDateString({
    strict: true,
  })
  initialDate: Date;

  @IsOptional()
  @IsDateString({
    strict: true,
  })
  finalDate: Date;

  @IsOptional()
  @Length(5, 255)
  description: string;

  @IsOptional()
  @Length(5, 255)
  title: string;

  id?: string;
}
