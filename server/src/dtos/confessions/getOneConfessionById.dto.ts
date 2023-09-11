import { IsHexadecimal, Length } from 'class-validator';

export class GetOneConfessionByIdDTO {
  @IsHexadecimal()
  @Length(32, 32)
  id: string;
}
