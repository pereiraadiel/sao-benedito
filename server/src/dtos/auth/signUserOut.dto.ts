import { IsJWT } from 'class-validator';

export class SignUserOutDTO {
  @IsJWT({
    message: 'O token informado não esta em um formato aceito',
  })
  accessToken: string;
}
