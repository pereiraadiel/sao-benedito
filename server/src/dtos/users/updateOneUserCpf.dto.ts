import { IsHexadecimal, IsNotEmpty, Length } from 'class-validator';

export class UpdateOneUserCpfDTO {
  @IsNotEmpty()
  @Length(11, 11)
  cpf: string;

  @IsHexadecimal()
  @Length(32, 32)
  id: string;
}
