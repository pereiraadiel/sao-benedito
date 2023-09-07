import { Usecase } from '../usecase';
import { Inject, Injectable } from '@nestjs/common';
import { UnauthorizedException } from '../../exceptions/unauthorized.exception';
import {
  USERS_REPOSITORY,
  UsersRepository,
} from '../../repositories/users/users.repository';
import { HashService } from '../../services/hash.service';
import { SignUserInDTO } from '../../dtos/auth/signUserIn.dto';

@Injectable()
export class SignUserInUsecase extends Usecase {
  protected usecaseName = 'Sign User In Usecase';

  constructor(
    @Inject(USERS_REPOSITORY)
    private readonly usersRepository: UsersRepository,
    private readonly hashService: HashService,
  ) {
    super();
  }

  async handle({ email, password }: SignUserInDTO) {
    try {
      const user = await this.usersRepository.findOneByEmail(email);

      if (!user) {
        console.warn('not found');
        throw new UnauthorizedException(
          [
            {
              email,
            },
          ],
          this.usecaseName,
        );
      }
      const isPasswordCorrect = await this.hashService.verify(
        password,
        user.passwordHash,
      );

      if (!isPasswordCorrect) {
        console.warn('incorrect');
        throw new UnauthorizedException(
          [
            {
              email,
            },
          ],
          this.usecaseName,
        );
      }

      delete user.passwordHash;

      // gerar um jwt e armazena-lo no redis para ter a possibilidade de logout

      return user;
    } catch (error) {
      this.exceptionHandler(error, [
        {
          email,
        },
      ]);
    }
  }
}
