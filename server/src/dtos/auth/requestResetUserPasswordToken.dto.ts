import { IsEmail, IsNotEmpty } from 'class-validator';

export class RequestResetUserPasswordTokenDTO {
  @IsNotEmpty()
  @IsEmail(
    {},
    {
      message: 'Forneça um email válido',
    },
  )
  email: string;
}
