import { Inject, Injectable } from '@nestjs/common';
import { Usecase } from '../usecase';
import { DeleteOneConfessionDTO } from '../../dtos/confessions/deleteOneConfession.dto';
import { NotFoundException } from '../../exceptions/notFound.exception';
import {
  CONFESSIONS_REPOSITORY,
  ConfessionsRepository,
} from '../../repositories/confessions/confessions.repository';

@Injectable()
export class DeleteOneConfessionUsecase extends Usecase {
  protected usecaseName = 'Delete One Confession Usecase';

  constructor(
    @Inject(CONFESSIONS_REPOSITORY)
    private readonly confessionsRepository: ConfessionsRepository,
  ) {
    super();
  }

  async handle(dto: DeleteOneConfessionDTO) {
    try {
      const exists = await this.confessionsRepository.findOneId(dto.id);
      if (!exists) {
        throw new NotFoundException(
          [
            {
              id: dto.id,
            },
          ],
          this.usecaseName,
        );
      }

      await this.confessionsRepository.deleteOneById(dto.id);
    } catch (error) {
      this.exceptionHandler(error, [
        {
          id: dto.id,
        },
      ]);
    }
  }
}
