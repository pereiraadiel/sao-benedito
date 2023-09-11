import { Module } from '@nestjs/common';

import { CONFESSIONS_REPOSITORY } from '../repositories/confessions/confessions.repository';
import { ConfessionsConcreteRepository } from '../repositories/confessions/confessions.concrete.repository';
import { ConfessionsController } from '../controllers/confessions/confessions.controller';
import { CreateOneConfessionUsecase } from '../usecases/confessions/createOneConfession.usecase';
import { GetOneConfessionByIdUsecase } from '../usecases/confessions/getOneConfessionById.usecase';
import { GetAllConfessionsUsecase } from '../usecases/confessions/getAllConfessions.usecase';
import { DeleteOneConfessionUsecase } from '../usecases/confessions/deleteOneConfession.usecase';
import { UpdateOneConfessionUsecase } from '../usecases/confessions/updateOneConfession.usecase';

@Module({
  controllers: [ConfessionsController],
  providers: [
    CreateOneConfessionUsecase,
    GetAllConfessionsUsecase,
    GetOneConfessionByIdUsecase,
    UpdateOneConfessionUsecase,
    DeleteOneConfessionUsecase,
    {
      provide: CONFESSIONS_REPOSITORY,
      useClass: ConfessionsConcreteRepository,
    },
  ],
  exports: [],
})
export class ConfessionsModule {}
