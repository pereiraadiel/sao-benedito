import { Module } from '@nestjs/common';

import { NOTICES_REPOSITORY } from '../repositories/notices/notices.repository';
import { NoticesConcreteRepository } from '../repositories/notices/notices.concrete.repository';
import { NoticesController } from '../controllers/notices/notices.controller';
import { CreateOneNoticeUsecase } from '../usecases/notices/createOneNotice.usecase';
import { GetOneNoticeByIdUsecase } from '../usecases/notices/getOneNoticeById.usecase';
import { GetAllNoticesUsecase } from '../usecases/notices/getAllNotices.usecase';
import { DeleteOneNoticeUsecase } from '../usecases/notices/deleteOneNotice.usecase';
import { UpdateOneNoticeUsecase } from '../usecases/notices/updateOneNotice.usecase';

@Module({
  controllers: [NoticesController],
  providers: [
    CreateOneNoticeUsecase,
    GetAllNoticesUsecase,
    GetOneNoticeByIdUsecase,
    UpdateOneNoticeUsecase,
    DeleteOneNoticeUsecase,
    {
      provide: NOTICES_REPOSITORY,
      useClass: NoticesConcreteRepository,
    },
  ],
  exports: [],
})
export class NoticesModule {}
