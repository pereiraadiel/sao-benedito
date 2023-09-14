import { Module } from '@nestjs/common';

import { EVENTS_REPOSITORY } from '../repositories/events/events.repository';
import { EventsConcreteRepository } from '../repositories/events/events.concrete.repository';
import { EventsController } from '../controllers/events/events.controller';
import { CreateOneEventUsecase } from '../usecases/events/createOneEvent.usecase';
import { GetOneEventByIdUsecase } from '../usecases/events/getOneEventById.usecase';
import { GetAllEventsUsecase } from '../usecases/events/getAllEvents.usecase';
import { DeleteOneEventUsecase } from '../usecases/events/deleteOneEvent.usecase';
import { UpdateOneEventUsecase } from '../usecases/events/updateOneEvent.usecase';

@Module({
  controllers: [EventsController],
  providers: [
    CreateOneEventUsecase,
    GetAllEventsUsecase,
    GetOneEventByIdUsecase,
    UpdateOneEventUsecase,
    DeleteOneEventUsecase,
    {
      provide: EVENTS_REPOSITORY,
      useClass: EventsConcreteRepository,
    },
  ],
  exports: [],
})
export class EventsModule {}
