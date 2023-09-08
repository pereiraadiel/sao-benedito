import { USERS_REPOSITORY } from './../../repositories/users/users.repository';
import { UsersRepository } from '../../repositories/users/users.repository';
import { Usecase } from '../usecase';
import { Inject, Injectable } from '@nestjs/common';
import { NotFoundException } from '../../exceptions/notFound.exception';
import { GetOneUserByIdDTO } from '../../dtos/users/getOneUserById.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class GetOneUserByIdUsecase extends Usecase {
  protected usecaseName = 'Get One User By Id Usecase';

  constructor(
    @Inject(USERS_REPOSITORY)
    private readonly repository: UsersRepository,
    private readonly jwtService: JwtService,
  ) {
    super();
  }

  async handle({ id }: GetOneUserByIdDTO, token: string) {
    try {
      const user = await this.repository.findOneById(id);
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
