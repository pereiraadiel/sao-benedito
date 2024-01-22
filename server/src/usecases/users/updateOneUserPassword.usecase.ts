import { USERS_REPOSITORY } from './../../repositories/users/users.repository';
import { UsersRepository } from '../../repositories/users/users.repository';
import { Usecase } from '../usecase';
import { Inject, Injectable } from '@nestjs/common';
import { UpdateOneUserPasswordDTO } from '../../dtos/users/updateOneUserPassword.dto';
import { NotFoundException } from '../../exceptions/notFound.exception';
import { HashService } from '../../services/hash.service';

@Injectable()
export class UpdateOneUserPasswordUsecase extends Usecase {
  protected usecaseName = 'Update One User Password Usecase';

  constructor(
    @Inject(USERS_REPOSITORY)
    private readonly repository: UsersRepository,
    private readonly hashService: HashService,
  ) {
    super();
  }

  async handle({ password, id }: UpdateOneUserPasswordDTO) {
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
        passwordHash: await this.hashService.hash(password),
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
