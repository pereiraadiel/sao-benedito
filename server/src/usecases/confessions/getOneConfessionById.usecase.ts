import { Inject, Injectable } from '@nestjs/common';
import { Usecase } from '../usecase';
import { GetOneUserByIdDTO } from '../../dtos/users/getOneUserById.dto';
import { NotFoundException } from '../../exceptions/notFound.exception';
import {
  CONFESSIONS_REPOSITORY,
  ConfessionsRepository,
} from '../../repositories/confessions/confessions.repository';

@Injectable()
export class GetOneConfessionByIdUsecase extends Usecase {
  protected usecaseName = 'Get One Confession By Id Usecase';

  constructor(
    @Inject(CONFESSIONS_REPOSITORY)
    private readonly confessionsRepository: ConfessionsRepository,
  ) {
    super();
  }

  async handle(dto: GetOneUserByIdDTO) {
    try {
      const confession = await this.confessionsRepository.findOneId(dto.id);
      if (!confession) {
        throw new NotFoundException(
          [
            {
              id: dto.id,
            },
          ],
          this.usecaseName,
        );
      }
      return confession;
    } catch (error) {
      this.exceptionHandler(error, [
        {
          id: dto.id,
        },
      ]);
    }
  }
}
