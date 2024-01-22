import { Inject, Injectable } from '@nestjs/common';
import { Usecase } from '../usecase';
import { DeleteOneNoticeDTO } from '../../dtos/notices/deleteOneNotice.dto';
import { NotFoundException } from '../../exceptions/notFound.exception';
import {
  NOTICES_REPOSITORY,
  NoticesRepository,
} from '../../repositories/notices/notices.repository';

@Injectable()
export class DeleteOneNoticeUsecase extends Usecase {
  protected usecaseName = 'Delete One Notice Usecase';

  constructor(
    @Inject(NOTICES_REPOSITORY)
    private readonly noticesRepository: NoticesRepository,
  ) {
    super();
  }

  async handle(dto: DeleteOneNoticeDTO) {
    try {
      const exists = await this.noticesRepository.findOneId(dto.id);
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

      await this.noticesRepository.deleteOneById(dto.id);
    } catch (error) {
      this.exceptionHandler(error, [
        {
          id: dto.id,
        },
      ]);
    }
  }
}
