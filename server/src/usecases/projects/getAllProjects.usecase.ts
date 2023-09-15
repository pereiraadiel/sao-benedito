import { Inject, Injectable } from '@nestjs/common';
import { Usecase } from '../usecase';
import {
  PROJECTS_REPOSITORY,
  ProjectsRepository,
} from '../../repositories/projects/projects.repository';
import { GetAllProjectsDTO } from '../../dtos/projects/getAllProjects.dto';

@Injectable()
export class GetAllProjectsUsecase extends Usecase {
  protected usecaseName = 'Get All Projects Usecase';

  constructor(
    @Inject(PROJECTS_REPOSITORY)
    private readonly projectsRepository: ProjectsRepository,
  ) {
    super();
  }

  async handle(dto: GetAllProjectsDTO) {
    try {
      const projects = await this.projectsRepository.findMany(dto);

      return this.buildPage(projects);
    } catch (error) {
      this.exceptionHandler(error, []);
    }
  }
}
