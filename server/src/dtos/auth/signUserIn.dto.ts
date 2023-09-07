import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class SignUserInDTO {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(5, 255)
  password: string;
}
