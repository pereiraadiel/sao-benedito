import { IsHexadecimal, Length } from 'class-validator';

export class DeleteOneMassDTO {
  @IsHexadecimal()
  @Length(32, 32)
  id: string;
}
