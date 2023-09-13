import { Inject, Injectable } from '@nestjs/common';
import { Usecase } from '../usecase';
import {
  SECRETARY_TIMES_REPOSITORY,
  SecretaryTimesRepository,
} from '../../repositories/secretaryTimes/secretaryTimes.repository';

@Injectable()
export class GetAllSecretaryTimesUsecase extends Usecase {
  protected usecaseName = 'Get All Secretary Times Usecase';

  constructor(
    @Inject(SECRETARY_TIMES_REPOSITORY)
    private readonly secretaryTimesRepository: SecretaryTimesRepository,
  ) {
    super();
  }

  async handle() {
    try {
      const secretaryTimes = await this.secretaryTimesRepository.findMany();

      return this.buildPage(secretaryTimes);
    } catch (error) {
      this.exceptionHandler(error, []);
    }
  }
}
