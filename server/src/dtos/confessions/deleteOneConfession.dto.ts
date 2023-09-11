import { IsHexadecimal, Length } from 'class-validator';

export class DeleteOneConfessionDTO {
  @IsHexadecimal()
  @Length(32, 32)
  id: string;
}
