import { Inject, Injectable } from '@nestjs/common';
import { Usecase } from '../usecase';
import { DeleteOneEventDTO } from '../../dtos/events/deleteOneEvent.dto';
import { NotFoundException } from '../../exceptions/notFound.exception';
import {
  EVENTS_REPOSITORY,
  EventsRepository,
} from '../../repositories/events/events.repository';

@Injectable()
export class DeleteOneEventUsecase extends Usecase {
  protected usecaseName = 'Delete One Event Usecase';

  constructor(
    @Inject(EVENTS_REPOSITORY)
    private readonly eventsRepository: EventsRepository,
  ) {
    super();
  }

  async handle(dto: DeleteOneEventDTO) {
    try {
      const exists = await this.eventsRepository.findOneId(dto.id);
      if (!exists) {
        throw new NotFoundException(
          [
            {
              id: dto.id,
            },
          ],
          this.usecaseName,
        );
      }

      await this.eventsRepository.deleteOneById(dto.id);
    } catch (error) {
      this.exceptionHandler(error, [
        {
          id: dto.id,
        },
      ]);
    }
  }
}
