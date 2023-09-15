import { Inject, Injectable } from '@nestjs/common';
import { Usecase } from '../usecase';
import {
  NOTICES_REPOSITORY,
  NoticesRepository,
} from '../../repositories/notices/notices.repository';
import { CreateOneNoticeDTO } from '../../dtos/notices/createOneNotice.dto';

@Injectable()
export class CreateOneNoticeUsecase extends Usecase {
  protected usecaseName = 'Create One Notice Usecase';

  constructor(
    @Inject(NOTICES_REPOSITORY)
    private readonly noticesRepository: NoticesRepository,
  ) {
    super();
  }

  async handle(dto: CreateOneNoticeDTO) {
    try {
      const notice = await this.noticesRepository.createOne(dto);
      return notice;
    } catch (error) {
      this.exceptionHandler(error, [
        {
          title: dto.title,
        },
      ]);
    }
  }
}
