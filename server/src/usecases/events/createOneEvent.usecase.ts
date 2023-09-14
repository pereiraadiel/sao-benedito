import { Inject, Injectable } from '@nestjs/common';
import { Usecase } from '../usecase';
import {
  EVENTS_REPOSITORY,
  EventsRepository,
} from '../../repositories/events/events.repository';
import { CreateOneEventDTO } from '../../dtos/events/createOneEvent.dto';

@Injectable()
export class CreateOneEventUsecase extends Usecase {
  protected usecaseName = 'Create One Event Usecase';

  constructor(
    @Inject(EVENTS_REPOSITORY)
    private readonly eventsRepository: EventsRepository,
  ) {
    super();
  }

  async handle(dto: CreateOneEventDTO) {
    try {
      const event = await this.eventsRepository.createOne(dto);
      return event;
    } catch (error) {
      this.exceptionHandler(error, [
        {
          title: dto.title,
        },
      ]);
    }
  }
}
