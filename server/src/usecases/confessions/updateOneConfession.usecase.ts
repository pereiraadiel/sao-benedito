import { Inject, Injectable } from '@nestjs/common';
import { Usecase } from '../usecase';
import { UpdateOneConfessionDTO } from '../../dtos/confessions/updateOneConfession.dto';
import { NotFoundException } from '../../exceptions/notFound.exception';
import {
  CONFESSIONS_REPOSITORY,
  ConfessionsRepository,
} from '../../repositories/confessions/confessions.repository';

@Injectable()
export class UpdateOneConfessionUsecase extends Usecase {
  protected usecaseName = 'Update One Confession Usecase';

  constructor(
    @Inject(CONFESSIONS_REPOSITORY)
    private readonly confessionsRepository: ConfessionsRepository,
  ) {
    super();
  }

  async handle(dto: UpdateOneConfessionDTO) {
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

      const confession = await this.confessionsRepository.updateOne({
        id: dto.id,
        ...dto,
      });

      return confession;
    } catch (error) {
      console.error(error);
      this.exceptionHandler(error, [
        {
          id: dto.id,
        },
      ]);
    }
  }
}
