import { Inject, Injectable } from '@nestjs/common';
import { Usecase } from '../usecase';
import {
  EVENTS_REPOSITORY,
  EventsRepository,
} from '../../repositories/events/events.repository';
import { GetAllEventsDTO } from '../../dtos/events/getAllEvents.dto';

@Injectable()
export class GetAllEventsUsecase extends Usecase {
  protected usecaseName = 'Get All Events Usecase';

  constructor(
    @Inject(EVENTS_REPOSITORY)
    private readonly eventsRepository: EventsRepository,
  ) {
    super();
  }

  async handle(dto: GetAllEventsDTO) {
    try {
      const events = await this.eventsRepository.findMany(dto);

      return this.buildPage(events);
    } catch (error) {
      this.exceptionHandler(error, []);
    }
  }
}
