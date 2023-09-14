import { Inject, Injectable } from '@nestjs/common';
import { Usecase } from '../usecase';
import { UpdateOneEventDTO } from '../../dtos/events/updateOneEvent.dto';
import { NotFoundException } from '../../exceptions/notFound.exception';
import {
  EVENTS_REPOSITORY,
  EventsRepository,
} from '../../repositories/events/events.repository';

@Injectable()
export class UpdateOneEventUsecase extends Usecase {
  protected usecaseName = 'Update One Event Usecase';

  constructor(
    @Inject(EVENTS_REPOSITORY)
    private readonly eventsRepository: EventsRepository,
  ) {
    super();
  }

  async handle(dto: UpdateOneEventDTO) {
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

      const event = await this.eventsRepository.updateOne({
        id: dto.id,
        ...dto,
      });

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
