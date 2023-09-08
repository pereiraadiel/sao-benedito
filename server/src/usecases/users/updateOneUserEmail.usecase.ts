import { USERS_REPOSITORY } from './../../repositories/users/users.repository';
import { UsersRepository } from '../../repositories/users/users.repository';
import { Usecase } from '../usecase';
import { Inject, Injectable } from '@nestjs/common';
import { UpdateOneUserEmailDTO } from '../../dtos/users/updateOneUserEmail.dto';
import { NotFoundException } from '../../exceptions/notFound.exception';
import { AlreadyExistsException } from '../../exceptions/alreadyExists.exception';
import { JwtService } from '@nestjs/jwt';
import { UnauthorizedException } from '../../exceptions/unauthorized.exception';

@Injectable()
export class UpdateOneUserEmailUsecase extends Usecase {
  protected usecaseName = 'Update One User Email Usecase';

  constructor(
    @Inject(USERS_REPOSITORY)
    private readonly repository: UsersRepository,
    private readonly jwtService: JwtService,
  ) {
    super();
  }

  async handle({ email, id }: UpdateOneUserEmailDTO, token: string) {
    try {
      const { id: userId } = this.jwtService.decode(token) as any;
      if (!(id === userId)) {
        throw new UnauthorizedException(
          [
            {
              id,
            },
          ],
          this.usecaseName,
        );
      }

      let user = await this.repository.findOneById(id);
      if (!user) {
        throw new NotFoundException(
          [
            {
              id,
            },
          ],
          this.usecaseName,
        );
      }

      const emailAlreadyInUse = await this.repository.findOneByEmail(email);

      if (emailAlreadyInUse && emailAlreadyInUse.email !== user.email) {
        throw new AlreadyExistsException(
          [
            {
              email,
            },
          ],
          this.usecaseName,
        );
      }

      user = await this.repository.updateOne({
        id,
        email,
      });

      delete user.passwordHash;

      return user;
    } catch (error) {
      this.exceptionHandler(error, [
        {
          id,
        },
      ]);
    }
  }
}
