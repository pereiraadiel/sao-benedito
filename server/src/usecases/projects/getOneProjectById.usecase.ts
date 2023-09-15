import { Inject, Injectable } from '@nestjs/common';
import { Usecase } from '../usecase';
import { GetOneProjectByIdDTO } from '../../dtos/projects/getOneProjectById.dto';
import { NotFoundException } from '../../exceptions/notFound.exception';
import {
  PROJECTS_REPOSITORY,
  ProjectsRepository,
} from '../../repositories/projects/projects.repository';

@Injectable()
export class GetOneProjectByIdUsecase extends Usecase {
  protected usecaseName = 'Get One Project By Id Usecase';

  constructor(
    @Inject(PROJECTS_REPOSITORY)
    private readonly projectsRepository: ProjectsRepository,
  ) {
    super();
  }

  async handle(dto: GetOneProjectByIdDTO) {
    try {
      const project = await this.projectsRepository.findOneId(dto.id);
      if (!project) {
        throw new NotFoundException(
          [
            {
              id: dto.id,
            },
          ],
          this.usecaseName,
        );
      }
      return project;
    } catch (error) {
      this.exceptionHandler(error, [
        {
          id: dto.id,
        },
      ]);
    }
  }
}
