import { Inject, Injectable } from '@nestjs/common';
import { Usecase } from '../usecase';
import { GetOneEventByIdDTO } from '../../dtos/events/getOneEventById.dto';
import { NotFoundException } from '../../exceptions/notFound.exception';
import {
  EVENTS_REPOSITORY,
  EventsRepository,
} from '../../repositories/events/events.repository';

@Injectable()
export class GetOneEventByIdUsecase extends Usecase {
  protected usecaseName = 'Get One Event By Id Usecase';

  constructor(
    @Inject(EVENTS_REPOSITORY)
    private readonly eventsRepository: EventsRepository,
  ) {
    super();
  }

  async handle(dto: GetOneEventByIdDTO) {
    try {
      const event = await this.eventsRepository.findOneId(dto.id);
      if (!event) {
        throw new NotFoundException(
          [
            {
              id: dto.id,
            },
          ],
          this.usecaseName,
        );
      }
      return event;
    } catch (error) {
      this.exceptionHandler(error, [
        {
          id: dto.id,
        },
      ]);
    }
  }
}
