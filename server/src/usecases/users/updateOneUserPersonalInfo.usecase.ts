import { USERS_REPOSITORY } from './../../repositories/users/users.repository';
import { UsersRepository } from '../../repositories/users/users.repository';
import { Usecase } from '../usecase';
import { Inject, Injectable } from '@nestjs/common';
import { UpdateOneUserPersonalInfoDTO } from '../../dtos/users/updateOneUserPersonalInfo.dto';
import { NotFoundException } from '../../exceptions/notFound.exception';

@Injectable()
export class UpdateOneUserPersonalInfoUsecase extends Usecase {
  protected usecaseName = 'Update One User Personal Info Usecase';

  constructor(
    @Inject(USERS_REPOSITORY)
    private readonly repository: UsersRepository,
  ) {
    super();
  }

  async handle({ firstName, lastName, id }: UpdateOneUserPersonalInfoDTO) {
    try {
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
