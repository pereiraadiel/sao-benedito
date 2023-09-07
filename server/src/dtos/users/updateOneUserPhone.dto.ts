import { IsNotEmpty, Length } from 'class-validator';

export class UpdateOneUserPhoneDTO {
  @IsNotEmpty()
  @Length(8, 11)
  phone: string;

  id?: string;
}
