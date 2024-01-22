import { IsNotEmpty, Length } from 'class-validator';

export class UpdateOneUserCpfDTO {
  @IsNotEmpty()
  @Length(11, 11)
  cpf: string;

  id?: string;
}
