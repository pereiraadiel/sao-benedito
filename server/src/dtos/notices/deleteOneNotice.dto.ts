import { IsHexadecimal, Length } from 'class-validator';

export class DeleteOneNoticeDTO {
  @IsHexadecimal()
  @Length(32, 32)
  id: string;
}
