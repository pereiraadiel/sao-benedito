import { IsHexadecimal, Length } from 'class-validator';

export class DeleteOneSecretaryTimeDTO {
  @IsHexadecimal()
  @Length(32, 32)
  id: string;
}
