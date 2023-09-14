import { Inject, Injectable } from '@nestjs/common';
import { Usecase } from '../usecase';
import { GetOneMassByIdDTO } from '../../dtos/masses/getOneMassById.dto';
import { NotFoundException } from '../../exceptions/notFound.exception';
import {
  MASSES_REPOSITORY,
  MassesRepository,
} from '../../repositories/masses/masses.repository';

@Injectable()
export class GetOneMassByIdUsecase extends Usecase {
  protected usecaseName = 'Get One Mass By Id Usecase';

  constructor(
    @Inject(MASSES_REPOSITORY)
    private readonly massesRepository: MassesRepository,
  ) {
    super();
  }

  async handle(dto: GetOneMassByIdDTO) {
    try {
      const confession = await this.massesRepository.findOneId(dto.id);
      if (!confession) {
        throw new NotFoundException(
          [
            {
              id: dto.id,
            },
          ],
          this.usecaseName,
        );
      }
      return confession;
    } catch (error) {
      this.exceptionHandler(error, [
        {
          id: dto.id,
        },
      ]);
    }
  }
}
