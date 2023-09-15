import {
  IsDateString,
  IsHexadecimal,
  IsNotEmpty,
  Length,
  IsOptional,
} from 'class-validator';

export class CreateOneProjectDTO {
  @IsNotEmpty()
  @Length(5, 255)
  title: string;

  @IsNotEmpty()
  @Length(5, 255)
  description: string;

  @IsOptional()
  @IsDateString({
    strict: true,
  })
  finishedIn?: Date;

  @IsNotEmpty()
  @IsHexadecimal()
  @Length(32, 32)
  communityId: string;
}
