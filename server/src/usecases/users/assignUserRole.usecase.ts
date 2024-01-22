import { USERS_REPOSITORY } from './../../repositories/users/users.repository';
import { UsersRepository } from '../../repositories/users/users.repository';
import { Usecase } from '../usecase';
import { Inject, Injectable } from '@nestjs/common';
import { AssignUserRoleDTO } from '../../dtos/users/assignUserRole.dto';
import { NotFoundException } from '../../exceptions/notFound.exception';

@Injectable()
export class AssignUserRoleUsecase extends Usecase {
  protected usecaseName = 'Assign User Role Usecase';

  constructor(
    @Inject(USERS_REPOSITORY)
    private readonly repository: UsersRepository,
  ) {
    super();
  }

  async handle({ role, id }: AssignUserRoleDTO) {
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
        role,
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
