import { IsHexadecimal, Length } from 'class-validator';

export class GetOneMassByIdDTO {
  @IsHexadecimal()
  @Length(32, 32)
  id: string;
}
