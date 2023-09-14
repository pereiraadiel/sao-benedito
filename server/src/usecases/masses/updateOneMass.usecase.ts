import { Inject, Injectable } from '@nestjs/common';
import { Usecase } from '../usecase';
import { UpdateOneMassDTO } from '../../dtos/masses/updateOneMass.dto';
import { NotFoundException } from '../../exceptions/notFound.exception';
import {
  MASSES_REPOSITORY,
  MassesRepository,
} from '../../repositories/masses/masses.repository';

@Injectable()
export class UpdateOneMassUsecase extends Usecase {
  protected usecaseName = 'Update One Mass Usecase';

  constructor(
    @Inject(MASSES_REPOSITORY)
    private readonly massesRepository: MassesRepository,
  ) {
    super();
  }

  async handle(dto: UpdateOneMassDTO) {
    try {
      const exists = await this.massesRepository.findOneId(dto.id);
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

      const mass = await this.massesRepository.updateOne({
        id: dto.id,
        ...dto,
      });

      return mass;
    } catch (error) {
      console.error(error);
      this.exceptionHandler(error, [
        {
          id: dto.id,
        },
      ]);
    }
  }
}
