import { IsHexadecimal, Length } from 'class-validator';

export class GetOneSecretaryTimeByIdDTO {
  @IsHexadecimal()
  @Length(32, 32)
  id: string;
}
