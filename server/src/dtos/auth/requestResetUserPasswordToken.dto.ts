import { IsEmail, IsNotEmpty } from 'class-validator';

export class RequestResetUserPasswordTokenDTO {
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
