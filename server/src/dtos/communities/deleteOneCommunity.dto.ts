import { IsHexadecimal, Length } from 'class-validator';

export class DeleteOneCommunityDTO {
  @IsHexadecimal()
  @Length(32, 32)
  id: string;
}
