import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumberString,
  Length,
} from 'class-validator';
import { RoleEnum } from '../../enums/role.enum';

export class CreateOneUserDTO {
  @IsNotEmpty()
  @Length(3, 20)
  firstName: string;

  @IsNotEmpty()
  @Length(5, 60)
  lastName: string;

  @IsNotEmpty()
  @IsNumberString()
  @Length(11, 11)
  cpf: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(5, 255)
  password: string;

  @IsNotEmpty()
  @IsNumberString()
  @Length(8, 11)
  phone: string;

  @IsEnum(RoleEnum)
  role: RoleEnum;
}
