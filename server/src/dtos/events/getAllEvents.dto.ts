import { IsHexadecimal, IsOptional, Length } from 'class-validator';

export class GetAllEventsDTO {
  @IsOptional()
  @IsHexadecimal()
  @Length(32, 32)
  communityId?: string;
}
