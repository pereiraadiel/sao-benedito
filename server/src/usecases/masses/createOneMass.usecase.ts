import { Inject, Injectable } from '@nestjs/common';
import { Usecase } from '../usecase';
import {
  MASSES_REPOSITORY,
  MassesRepository,
} from '../../repositories/masses/masses.repository';
import { CreateOneMassDTO } from '../../dtos/masses/createOneMass.dto';

@Injectable()
export class CreateOneMassUsecase extends Usecase {
  protected usecaseName = 'Create One Mass Usecase';

  constructor(
    @Inject(MASSES_REPOSITORY)
    private readonly massesRepository: MassesRepository,
  ) {
    super();
  }

  async handle(dto: CreateOneMassDTO) {
    try {
      const mass = await this.massesRepository.createOne(dto);
      return mass;
    } catch (error) {
      console.error(error);
      this.exceptionHandler(error, [
        {
          day: dto.day,
        },
      ]);
    }
  }
}
