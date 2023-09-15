import { IsHexadecimal, IsNotEmpty, Length } from 'class-validator';

export class DeleteOneProjectDTO {
  @IsNotEmpty()
  @IsHexadecimal()
  @Length(32, 32)
  id: string;
}
