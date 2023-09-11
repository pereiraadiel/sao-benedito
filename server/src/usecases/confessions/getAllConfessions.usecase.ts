import { Inject, Injectable } from '@nestjs/common';
import { Usecase } from '../usecase';
import {
  CONFESSIONS_REPOSITORY,
  ConfessionsRepository,
} from '../../repositories/confessions/confessions.repository';

@Injectable()
export class GetAllConfessionsUsecase extends Usecase {
  protected usecaseName = 'Get All Confessions Usecase';

  constructor(
    @Inject(CONFESSIONS_REPOSITORY)
    private readonly confessionsRepository: ConfessionsRepository,
  ) {
    super();
  }

  async handle() {
    try {
      const confessions = await this.confessionsRepository.findMany();

      return this.buildPage(confessions);
    } catch (error) {
      this.exceptionHandler(error, []);
    }
  }
}
