import { USERS_REPOSITORY } from './../../repositories/users/users.repository';
import { CreateOneUserDTO } from './../../dtos/users/createOneUser.dto';
import { UsersRepository } from '../../repositories/users/users.repository';
import { Usecase } from '../usecase';
import { HashService } from '../../services/hash.service';
import { Inject, Injectable } from '@nestjs/common';
import { AlreadyExistsException } from '../../exceptions/alreadyExists.exception';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class CreateOneUserUsecase extends Usecase {
  protected usecaseName = 'Create One User Usecase';

  constructor(
    @Inject(USERS_REPOSITORY)
    private readonly repository: UsersRepository,
    private readonly hashService: HashService,
    private readonly jwtService: JwtService,
  ) {
    super();
  }

  async handle(
    {
      cpf,
      email,
      firstName,
      lastName,
      password,
      phone,
      role,
    }: CreateOneUserDTO,
    token: string,
  ) {
    try {
      const alreadyExistsWithEmail =
        await this.repository.findOneByEmail(email);
      const alreadyExistsWithCpf = await this.repository.findOneByCpf(cpf);

      if (alreadyExistsWithCpf || alreadyExistsWithEmail) {
        throw new AlreadyExistsException(
          [
            {
              email,
              cpf,
            },
          ],
          this.usecaseName,
        );
      }

      const user = await this.repository.createOne({
        cpf,
        email,
        firstName,
        lastName,
        phone,
        role,
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
