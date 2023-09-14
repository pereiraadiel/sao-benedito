import { Inject, Injectable } from '@nestjs/common';
import { Usecase } from '../usecase';
import {
  MASSES_REPOSITORY,
  MassesRepository,
} from '../../repositories/masses/masses.repository';
import { GetAllMassesDTO } from '../../dtos/masses/getAllMasses.dto';

@Injectable()
export class GetAllMassesUsecase extends Usecase {
  protected usecaseName = 'Get All Masses Usecase';

  constructor(
    @Inject(MASSES_REPOSITORY)
    private readonly massesRepository: MassesRepository,
  ) {
    super();
  }

  async handle(dto: GetAllMassesDTO) {
    try {
      const masses = await this.massesRepository.findMany(dto);

      return this.buildPage(masses);
    } catch (error) {
      this.exceptionHandler(error, []);
    }
  }
}
