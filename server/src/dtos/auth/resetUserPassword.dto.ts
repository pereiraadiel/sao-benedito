import { IsNotEmpty, Length } from 'class-validator';

export class ResetUserPasswordDTO {
  @IsNotEmpty()
  @Length(5, 255, {
    message: 'A senha deve conter entre 5 e 255 caracteres',
  })
  password: string;

  @IsNotEmpty()
  @Length(42, 64, {
    message: 'O token informado não esta em um formato aceito',
  })
  token: string;
}
