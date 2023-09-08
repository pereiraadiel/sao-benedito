import { IsJWT } from 'class-validator';

export class RefreshUserTokenDTO {
  @IsJWT()
  accessToken: string;
}
