import { Inject, Injectable } from '@nestjs/common';
import * as moment from 'moment';

import { Usecase } from '../usecase';
import {
  NOTICES_REPOSITORY,
  NoticesRepository,
} from '../../repositories/notices/notices.repository';
import { GetAllNoticesDTO } from '../../dtos/notices/getAllNotices.dto';

@Injectable()
export class GetAllNoticesUsecase extends Usecase {
  protected usecaseName = 'Get All Notices Usecase';

  constructor(
    @Inject(NOTICES_REPOSITORY)
    private readonly noticesRepository: NoticesRepository,
  ) {
    super();
  }

  async handle(dto: GetAllNoticesDTO) {
    try {
      const today = moment();
      today.hour(23).minute(59).second(59);
      const oneWeekLater = moment(today).add(7, 'days');
      const oneMonthLater = moment(today).add(1, 'month');
      const oneTrimesterLater = moment(today).add(3, 'months');
      let filterUntilDate: Date;

      if (dto.thisWeek) {
        filterUntilDate = oneWeekLater.toDate();
      }
      if (dto.thisMonth) {
        filterUntilDate = oneMonthLater.toDate();
      }
      if (dto.thisTrimester) {
        filterUntilDate = oneTrimesterLater.toDate();
      }
      if (dto.all) {
        filterUntilDate = undefined;
      }
      if (!dto.thisMonth && !dto.thisTrimester && !dto.thisWeek && !dto.all) {
        filterUntilDate = today.toDate();
      }

      console.warn(filterUntilDate);
      const notices = await this.noticesRepository.findMany({
        filterUntilDate,
      });

      return this.buildPage(notices);
    } catch (error) {
      this.exceptionHandler(error, []);
    }
  }
}
