import { Module } from '@nestjs/common';

import { MASSES_REPOSITORY } from '../repositories/masses/masses.repository';
import { MassesConcreteRepository } from '../repositories/masses/masses.concrete.repository';
import { MassesController } from '../controllers/masses/masses.controller';
import { CreateOneMassUsecase } from '../usecases/masses/createOneMass.usecase';
import { GetOneMassByIdUsecase } from '../usecases/masses/getOneMassById.usecase';
import { GetAllMassesUsecase } from '../usecases/masses/getAllMasses.usecase';
import { DeleteOneMassUsecase } from '../usecases/masses/deleteOneMass.usecase';
import { UpdateOneMassUsecase } from '../usecases/masses/updateOneMass.usecase';

@Module({
  controllers: [MassesController],
  providers: [
    CreateOneMassUsecase,
    GetAllMassesUsecase,
    GetOneMassByIdUsecase,
    UpdateOneMassUsecase,
    DeleteOneMassUsecase,
    {
      provide: MASSES_REPOSITORY,
      useClass: MassesConcreteRepository,
    },
  ],
  exports: [],
})
export class MassesModule {}
