import { IsNotEmpty, Length } from 'class-validator';

export class ResetUserPasswordDTO {
  @IsNotEmpty()
  @Length(5, 255)
  password: string;

  @IsNotEmpty()
  @Length(42, 64)
  token: string;
}
