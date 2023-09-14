import { Inject, Injectable } from '@nestjs/common';
import { Usecase } from '../usecase';
import { UpdateOneSecretaryTimeDTO } from '../../dtos/secretaryTimes/updateOneSecretaryTime.dto';
import { NotFoundException } from '../../exceptions/notFound.exception';
import {
  SECRETARY_TIMES_REPOSITORY,
  SecretaryTimesRepository,
} from '../../repositories/secretaryTimes/secretaryTimes.repository';

@Injectable()
export class UpdateOneSecretaryTimeUsecase extends Usecase {
  protected usecaseName = 'Update One Secretary Time Usecase';

  constructor(
    @Inject(SECRETARY_TIMES_REPOSITORY)
    private readonly secretaryTimesRepository: SecretaryTimesRepository,
  ) {
    super();
  }

  async handle(dto: UpdateOneSecretaryTimeDTO) {
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

      const secretaryTime = await this.secretaryTimesRepository.updateOne({
        id: dto.id,
        ...dto,
      });

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
