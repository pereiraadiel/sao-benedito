import { Module } from '@nestjs/common';

import { SECRETARY_TIMES_REPOSITORY } from '../repositories/secretaryTimes/secretaryTimes.repository';
import { SecretaryTimesConcreteRepository } from '../repositories/secretaryTimes/secretaryTimes.concrete.repository';
import { SecretaryTimesController } from '../controllers/secretaryTimes/secretaryTimes.controller';
import { CreateOneSecretaryTimeUsecase } from '../usecases/secretaryTimes/createOneSecretaryTime.usecase';
import { GetOneSecretaryTimeByIdUsecase } from '../usecases/secretaryTimes/getOneSecretaryTimeById.usecase';
import { GetAllSecretaryTimesUsecase } from '../usecases/secretaryTimes/getAllSecretaryTimes.usecase';
import { DeleteOneSecretaryTimeUsecase } from '../usecases/secretaryTimes/deleteOneSecretaryTime.usecase';
import { UpdateOneSecretaryTimeUsecase } from '../usecases/secretaryTimes/updateOneSecretaryTime.usecase';

@Module({
  controllers: [SecretaryTimesController],
  providers: [
    CreateOneSecretaryTimeUsecase,
    GetAllSecretaryTimesUsecase,
    GetOneSecretaryTimeByIdUsecase,
    UpdateOneSecretaryTimeUsecase,
    DeleteOneSecretaryTimeUsecase,
    {
      provide: SECRETARY_TIMES_REPOSITORY,
      useClass: SecretaryTimesConcreteRepository,
    },
  ],
  exports: [],
})
export class SecretaryTimesModule {}
