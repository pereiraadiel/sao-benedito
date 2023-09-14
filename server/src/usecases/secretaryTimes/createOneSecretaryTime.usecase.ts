import { Inject, Injectable } from '@nestjs/common';
import { Usecase } from '../usecase';
import {
  SECRETARY_TIMES_REPOSITORY,
  SecretaryTimesRepository,
} from '../../repositories/secretaryTimes/secretaryTimes.repository';
import { CreateOneSecretaryTimeDTO } from '../../dtos/secretaryTimes/createOneSecretaryTime.dto';

@Injectable()
export class CreateOneSecretaryTimeUsecase extends Usecase {
  protected usecaseName = 'Create One Secretary Time Usecase';

  constructor(
    @Inject(SECRETARY_TIMES_REPOSITORY)
    private readonly secretaryTimesRepository: SecretaryTimesRepository,
  ) {
    super();
  }

  async handle(dto: CreateOneSecretaryTimeDTO) {
    try {
      const secretaryTime = await this.secretaryTimesRepository.createOne(dto);
      return secretaryTime;
    } catch (error) {
      this.exceptionHandler(error, [
        {
          day: dto.day,
        },
      ]);
    }
  }
}
