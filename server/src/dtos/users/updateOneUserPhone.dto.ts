import { IsHexadecimal, IsNotEmpty, Length } from 'class-validator';

export class UpdateOneUserPhoneDTO {
  @IsNotEmpty()
  @Length(8, 11)
  phone: string;

  @IsHexadecimal()
  @Length(32, 32)
  id: string;
}
