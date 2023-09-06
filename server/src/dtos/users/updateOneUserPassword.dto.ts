import { IsHexadecimal, IsNotEmpty, Length } from 'class-validator';

export class UpdateOneUserPasswordDTO {
  @IsNotEmpty()
  @Length(5, 255)
  password: string;

  @IsHexadecimal()
  @Length(32, 32)
  id: string;
}
