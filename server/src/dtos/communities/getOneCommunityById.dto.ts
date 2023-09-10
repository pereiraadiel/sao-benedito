import { IsHexadecimal, Length } from 'class-validator';

export class GetOneCommunityByIdDTO {
  @IsHexadecimal()
  @Length(32, 32)
  id: string;
}
