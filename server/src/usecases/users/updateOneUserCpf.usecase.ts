import { USERS_REPOSITORY } from './../../repositories/users/users.repository';
import { UsersRepository } from '../../repositories/users/users.repository';
import { Usecase } from '../usecase';
import { Inject, Injectable } from '@nestjs/common';
import { UpdateOneUserCpfDTO } from '../../dtos/users/updateOneUserCpf.dto';
import { NotFoundException } from '../../exceptions/notFound.exception';
import { AlreadyExistsException } from '../../exceptions/alreadyExists.exception';
import { JwtService } from '@nestjs/jwt';
import { UnauthorizedException } from '../../exceptions/unauthorized.exception';

@Injectable()
export class UpdateOneUserCpfUsecase extends Usecase {
  protected usecaseName = 'Update One User CPF Usecase';

  constructor(
    @Inject(USERS_REPOSITORY)
    private readonly repository: UsersRepository,
    private readonly jwtService: JwtService,
  ) {
    super();
  }

  async handle({ cpf, id }: UpdateOneUserCpfDTO, token: string) {
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

      const cpfAlreadyInUse = await this.repository.findOneByEmail(cpf);

      if (cpfAlreadyInUse && cpfAlreadyInUse.cpf !== user.cpf) {
        throw new AlreadyExistsException(
          [
            {
              cpf,
            },
          ],
          this.usecaseName,
        );
      }

      user = await this.repository.updateOne({
        id,
        cpf,
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
