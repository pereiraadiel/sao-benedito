import { IsEmail, IsOptional, Length } from 'class-validator';

export class UpdateOneCommunityDTO {
  @IsOptional()
  @Length(5, 255)
  name?: string;

  @IsOptional()
  @Length(5, 255)
  description?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @Length(8, 11)
  phone?: string;

  @IsOptional()
  @Length(5, 2048)
  history?: string;

  @IsOptional()
  @Length(5, 255)
  addressStreet?: string;

  @IsOptional()
  @Length(5, 255)
  addressDistrict?: string;

  @IsOptional()
  @Length(5, 255)
  addressMapLink?: string;

  id?: string;
}
