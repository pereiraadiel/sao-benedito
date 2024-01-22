import { USERS_REPOSITORY } from './../../repositories/users/users.repository';
import { UsersRepository } from '../../repositories/users/users.repository';
import { Usecase } from '../usecase';
import { Inject, Injectable } from '@nestjs/common';
import { UpdateOneUserPhoneDTO } from '../../dtos/users/updateOneUserPhone.dto';
import { NotFoundException } from '../../exceptions/notFound.exception';
import { UnauthorizedException } from '../../exceptions/unauthorized.exception';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UpdateOneUserPhoneUsecase extends Usecase {
  protected usecaseName = 'Update One User Phone Usecase';

  constructor(
    @Inject(USERS_REPOSITORY)
    private readonly repository: UsersRepository,
    private readonly jwtService: JwtService,
  ) {
    super();
  }

  async handle({ phone, id }: UpdateOneUserPhoneDTO, token: string) {
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
        phone,
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
