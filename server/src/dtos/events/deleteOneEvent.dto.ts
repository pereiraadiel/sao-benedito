import { IsHexadecimal, Length } from 'class-validator';

export class DeleteOneEventDTO {
  @IsHexadecimal()
  @Length(32, 32)
  id: string;
}
