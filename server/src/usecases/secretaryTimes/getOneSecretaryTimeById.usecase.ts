import { Inject, Injectable } from '@nestjs/common';
import { Usecase } from '../usecase';
import { GetOneSecretaryTimeByIdDTO } from '../../dtos/secretaryTimes/getOneSecretaryTimeById.dto';
import { NotFoundException } from '../../exceptions/notFound.exception';
import {
  SECRETARY_TIMES_REPOSITORY,
  SecretaryTimesRepository,
} from '../../repositories/secretaryTimes/secretaryTimes.repository';

@Injectable()
export class GetOneSecretaryTimeByIdUsecase extends Usecase {
  protected usecaseName = 'Get One Secretary Time By Id Usecase';

  constructor(
    @Inject(SECRETARY_TIMES_REPOSITORY)
    private readonly secretaryTimesRepository: SecretaryTimesRepository,
  ) {
    super();
  }

  async handle(dto: GetOneSecretaryTimeByIdDTO) {
    try {
      const secretaryTime = await this.secretaryTimesRepository.findOneId(
        dto.id,
      );
      if (!secretaryTime) {
        throw new NotFoundException(
          [
            {
              id: dto.id,
            },
          ],
          this.usecaseName,
        );
      }
      return secretaryTime;
    } catch (error) {
      this.exceptionHandler(error, [
        {
          id: dto.id,
        },
      ]);
    }
  }
}
