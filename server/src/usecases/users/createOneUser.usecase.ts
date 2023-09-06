import { USERS_REPOSITORY } from './../../repositories/users/users.repository';
import { CreateOneUserDTO } from './../../dtos/users/createOneUser.dto';
import { UsersRepository } from '../../repositories/users/users.repository';
import { Usecase } from '../usecase';
import { HashService } from '../../services/hash.service';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CreateOneUserUsecase extends Usecase {
  protected usecaseName = 'Create One User Usecase';

  constructor(
    @Inject(USERS_REPOSITORY)
    private readonly repository: UsersRepository,
    private readonly hashService: HashService,
  ) {
    super();
  }

  async handle({
    cpf,
    email,
    firstName,
    lastName,
    password,
    phone,
  }: CreateOneUserDTO) {
    try {
      const user = await this.repository.createOne({
        cpf,
        email,
        firstName,
        lastName,
        phone,
        passwordHash: await this.hashService.hash(password),
      });

      delete user.passwordHash;

      return user;
    } catch (error) {
      this.exceptionHandler(error, [
        {
          email,
          cpf,
        },
      ]);
    }
  }
}
