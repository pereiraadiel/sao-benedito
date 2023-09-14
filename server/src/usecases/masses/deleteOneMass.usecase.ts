import { Inject, Injectable } from '@nestjs/common';
import { Usecase } from '../usecase';
import { DeleteOneMassDTO } from '../../dtos/masses/deleteOneMass.dto';
import { NotFoundException } from '../../exceptions/notFound.exception';
import {
  MASSES_REPOSITORY,
  MassesRepository,
} from '../../repositories/masses/masses.repository';

@Injectable()
export class DeleteOneMassUsecase extends Usecase {
  protected usecaseName = 'Delete One Mass Usecase';

  constructor(
    @Inject(MASSES_REPOSITORY)
    private readonly massesRepository: MassesRepository,
  ) {
    super();
  }

  async handle(dto: DeleteOneMassDTO) {
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

      await this.massesRepository.deleteOneById(dto.id);
    } catch (error) {
      this.exceptionHandler(error, [
        {
          id: dto.id,
        },
      ]);
    }
  }
}
