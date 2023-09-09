import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateOneCommunityDTO {
  @IsNotEmpty()
  @Length(5, 255)
  name: string;

  @IsNotEmpty()
  @Length(5, 255)
  description: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(8, 11)
  phone: string;

  @IsNotEmpty()
  @Length(5, 2048)
  history: string;

  @IsNotEmpty()
  @Length(5, 255)
  addressStreet: string;

  @IsNotEmpty()
  @Length(5, 255)
  addressDistrict: string;

  @IsNotEmpty()
  @Length(5, 255)
  addressMapLink: string;
}
