import { IsOptional, Length } from 'class-validator';

export class UpdateOneUserPersonalInfoDTO {
  @IsOptional()
  @Length(3, 20)
  firstName?: string;

  @IsOptional()
  @Length(5, 60)
  lastName?: string;

  id?: string;
}
