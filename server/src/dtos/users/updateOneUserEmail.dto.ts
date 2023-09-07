import { IsEmail, IsNotEmpty } from 'class-validator';

export class UpdateOneUserEmailDTO {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  id?: string;
}
