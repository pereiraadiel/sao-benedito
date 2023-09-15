import { Inject, Injectable } from '@nestjs/common';
import { Usecase } from '../usecase';
import { UpdateOneNoticeDTO } from '../../dtos/notices/updateOneNotice.dto';
import { NotFoundException } from '../../exceptions/notFound.exception';
import {
  NOTICES_REPOSITORY,
  NoticesRepository,
} from '../../repositories/notices/notices.repository';

@Injectable()
export class UpdateOneNoticeUsecase extends Usecase {
  protected usecaseName = 'Update One Notice Usecase';

  constructor(
    @Inject(NOTICES_REPOSITORY)
    private readonly noticesRepository: NoticesRepository,
  ) {
    super();
  }

  async handle(dto: UpdateOneNoticeDTO) {
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

      const notice = await this.noticesRepository.updateOne({
        id: dto.id,
        ...dto,
      });

      return notice;
    } catch (error) {
      this.exceptionHandler(error, [
        {
          id: dto.id,
        },
      ]);
    }
  }
}
