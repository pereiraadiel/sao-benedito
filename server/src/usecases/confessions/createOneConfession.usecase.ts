import { Inject, Injectable } from '@nestjs/common';
import { Usecase } from '../usecase';
import {
  CONFESSIONS_REPOSITORY,
  ConfessionsRepository,
} from '../../repositories/confessions/confessions.repository';
import { CreateOneConfessionDTO } from '../../dtos/confessions/createOneConfession.dto';

@Injectable()
export class CreateOneConfessionUsecase extends Usecase {
  protected usecaseName = 'Create One Confession Usecase';

  constructor(
    @Inject(CONFESSIONS_REPOSITORY)
    private readonly confessionsRepository: ConfessionsRepository,
  ) {
    super();
  }

  async handle(dto: CreateOneConfessionDTO) {
    try {
      const confession = await this.confessionsRepository.createOne(dto);
      return confession;
    } catch (error) {
      console.error(error);
      this.exceptionHandler(error, [
        {
          day: dto.day,
        },
      ]);
    }
  }
}
