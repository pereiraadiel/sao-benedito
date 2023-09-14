import { Inject, Injectable } from '@nestjs/common';
import { Usecase } from '../usecase';
import {
  MASSES_REPOSITORY,
  MassesRepository,
} from '../../repositories/masses/masses.repository';

@Injectable()
export class GetAllMassesUsecase extends Usecase {
  protected usecaseName = 'Get All Masses Usecase';

  constructor(
    @Inject(MASSES_REPOSITORY)
    private readonly massesRepository: MassesRepository,
  ) {
    super();
  }

  async handle() {
    try {
      const masses = await this.massesRepository.findMany();

      return this.buildPage(masses);
    } catch (error) {
      this.exceptionHandler(error, []);
    }
  }
}
