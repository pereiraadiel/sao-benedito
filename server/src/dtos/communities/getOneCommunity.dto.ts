import { IsHexadecimal, Length } from 'class-validator';

export class GetOneCommunityDTO {
  @IsHexadecimal()
  @Length(32, 32)
  id: string;
}
