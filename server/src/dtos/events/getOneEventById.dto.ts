import { IsHexadecimal, Length } from 'class-validator';

export class GetOneEventByIdDTO {
  @IsHexadecimal()
  @Length(32, 32)
  id: string;
}
