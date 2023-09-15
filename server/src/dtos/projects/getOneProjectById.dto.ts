import { IsHexadecimal, IsNotEmpty, Length } from 'class-validator';

export class GetOneProjectByIdDTO {
  @IsNotEmpty()
  @IsHexadecimal()
  @Length(32, 32)
  id: string;
}
