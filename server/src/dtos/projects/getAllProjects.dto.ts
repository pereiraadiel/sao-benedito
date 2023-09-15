import { IsHexadecimal, IsOptional, Length } from 'class-validator';

export class GetAllProjectsDTO {
  @IsOptional()
  @IsHexadecimal()
  @Length(32, 32)
  communityId?: string;
}
