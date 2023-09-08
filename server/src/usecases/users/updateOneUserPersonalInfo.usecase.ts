import { USERS_REPOSITORY } from './../../repositories/users/users.repository';
import { UsersRepository } from '../../repositories/users/users.repository';
import { Usecase } from '../usecase';
import { Inject, Injectable } from '@nestjs/common';
import { UpdateOneUserPersonalInfoDTO } from '../../dtos/users/updateOneUserPersonalInfo.dto';
import { NotFoundException } from '../../exceptions/notFound.exception';
import { JwtService } from '@nestjs/jwt';
import { UnauthorizedException } from '../../exceptions/unauthorized.exception';

@Injectable()
export class UpdateOneUserPersonalInfoUsecase extends Usecase {
  protected usecaseName = 'Update One User Personal Info Usecase';

  constructor(
    @Inject(USERS_REPOSITORY)
    private readonly repository: UsersRepository,
    private readonly jwtService: JwtService,
  ) {
    super();
  }

  async handle(
    { firstName, lastName, id }: UpdateOneUserPersonalInfoDTO,
    token: string,
  ) {
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

      user = await this.repository.updateOne({
        id,
        firstName,
        lastName,
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
