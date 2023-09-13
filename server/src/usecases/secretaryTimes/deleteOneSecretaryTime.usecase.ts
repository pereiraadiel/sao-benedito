import { Inject, Injectable } from '@nestjs/common';
import { Usecase } from '../usecase';
import { DeleteOneSecretaryTimeDTO } from '../../dtos/secretaryTimes/deleteOneSecretaryTime.dto';
import { NotFoundException } from '../../exceptions/notFound.exception';
import {
  SECRETARY_TIMES_REPOSITORY,
  SecretaryTimesRepository,
} from '../../repositories/secretaryTimes/secretaryTimes.repository';

@Injectable()
export class DeleteOneSecretaryTimeUsecase extends Usecase {
  protected usecaseName = 'Delete One Secretary Time Usecase';

  constructor(
    @Inject(SECRETARY_TIMES_REPOSITORY)
    private readonly secretaryTimesRepository: SecretaryTimesRepository,
  ) {
    super();
  }

  async handle(dto: DeleteOneSecretaryTimeDTO) {
    try {
      const exists = await this.secretaryTimesRepository.findOneId(dto.id);
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

      await this.secretaryTimesRepository.deleteOneById(dto.id);
    } catch (error) {
      this.exceptionHandler(error, [
        {
          id: dto.id,
        },
      ]);
    }
  }
}
