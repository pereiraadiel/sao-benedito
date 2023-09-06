import { IsEmail, IsHexadecimal, IsNotEmpty, Length } from 'class-validator';

export class UpdateOneUserEmailDTO {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsHexadecimal()
  @Length(32, 32)
  id: string;
}
