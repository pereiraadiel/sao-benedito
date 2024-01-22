import { IsHexadecimal, Length } from 'class-validator';

export class GetOneNoticeByIdDTO {
  @IsHexadecimal()
  @Length(32, 32)
  id: string;
}
