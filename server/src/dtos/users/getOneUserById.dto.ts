import { IsHexadecimal, Length } from 'class-validator';

export class GetOneUserByIdDTO {
  @IsHexadecimal()
  @Length(32, 32)
  id: string;
}
