import { Inject, Injectable } from '@nestjs/common';
import { Usecase } from '../usecase';
import { GetOneNoticeByIdDTO } from '../../dtos/notices/getOneNoticeById.dto';
import { NotFoundException } from '../../exceptions/notFound.exception';
import {
  NOTICES_REPOSITORY,
  NoticesRepository,
} from '../../repositories/notices/notices.repository';

@Injectable()
export class GetOneNoticeByIdUsecase extends Usecase {
  protected usecaseName = 'Get One Notice By Id Usecase';

  constructor(
    @Inject(NOTICES_REPOSITORY)
    private readonly noticesRepository: NoticesRepository,
  ) {
    super();
  }

  async handle(dto: GetOneNoticeByIdDTO) {
    try {
      const notice = await this.noticesRepository.findOneId(dto.id);
      if (!notice) {
        throw new NotFoundException(
          [
            {
              id: dto.id,
            },
          ],
          this.usecaseName,
        );
      }
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
