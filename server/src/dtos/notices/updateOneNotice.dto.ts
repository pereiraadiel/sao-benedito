import { IsDateString, IsOptional, IsUrl, Length } from 'class-validator';

export class UpdateOneNoticeDTO {
  @IsOptional()
  @Length(5, 255)
  title?: string;

  @IsOptional()
  @Length(5, 255)
  description?: string;

  @IsOptional()
  @IsUrl()
  coverImageUrl?: string;

  @IsOptional()
  @IsDateString({
    strict: true,
  })
  notifyFrom?: Date;

  @IsOptional()
  @IsDateString({
    strict: true,
  })
  notifyUntil?: Date;

  id?: string;
}
