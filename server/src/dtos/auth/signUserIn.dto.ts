import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class SignUserInDTO {
  @IsEmail(
    {},
    {
      message: 'Forneça um email válido',
    },
  )
  email: string;

  @IsNotEmpty()
  @Length(5, 255, {
    message: 'A senha deve conter entre 5 e 255 caracteres',
  })
  password: string;
}
