import { IsJWT } from 'class-validator';

export class SignUserOutDTO {
  @IsJWT()
  accessToken: string;
}
