import { Inject, Injectable } from '@nestjs/common';
import { Usecase } from '../usecase';
import {
  PROJECTS_REPOSITORY,
  ProjectsRepository,
} from '../../repositories/projects/projects.repository';
import { CreateOneProjectDTO } from '../../dtos/projects/createOneProject.dto';

@Injectable()
export class CreateOneProjectUsecase extends Usecase {
  protected usecaseName = 'Create One Project Usecase';

  constructor(
    @Inject(PROJECTS_REPOSITORY)
    private readonly projectsRepository: ProjectsRepository,
  ) {
    super();
  }

  async handle(dto: CreateOneProjectDTO) {
    try {
      const project = await this.projectsRepository.createOne(dto);
      return project;
    } catch (error) {
      this.exceptionHandler(error, [
        {
          title: dto.title,
        },
      ]);
    }
  }
}
