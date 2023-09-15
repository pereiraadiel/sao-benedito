import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsUrl,
  Length,
} from 'class-validator';

export class CreateOneNoticeDTO {
  @IsNotEmpty()
  @Length(5, 255)
  title: string;

  @IsNotEmpty()
  @Length(5, 255)
  description: string;

  @IsNotEmpty()
  @IsUrl()
  coverImageUrl: string;

  @IsOptional()
  @IsDateString({
    strict: true,
  })
  notifyFrom?: Date;

  @IsNotEmpty()
  @IsDateString({
    strict: true,
  })
  notifyUntil: Date;
}
