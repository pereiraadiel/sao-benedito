import {
  IsDateString,
  IsHexadecimal,
  IsNotEmpty,
  Length,
} from 'class-validator';

export class CreateOneEventDTO {
  @IsNotEmpty()
  @IsDateString({
    strict: true,
  })
  initialDate: Date;

  @IsNotEmpty()
  @IsDateString({
    strict: true,
  })
  finalDate: Date;

  @IsNotEmpty()
  @Length(5, 255)
  description: string;

  @IsNotEmpty()
  @Length(5, 255)
  title: string;

  @IsNotEmpty()
  @IsHexadecimal()
  @Length(32, 32)
  communityId: string;
}
