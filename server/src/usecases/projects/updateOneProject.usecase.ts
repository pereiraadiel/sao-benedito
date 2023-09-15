import { Inject, Injectable } from '@nestjs/common';
import { Usecase } from '../usecase';
import { UpdateOneProjectDTO } from '../../dtos/projects/updateOneProject.dto';
import { NotFoundException } from '../../exceptions/notFound.exception';
import {
  PROJECTS_REPOSITORY,
  ProjectsRepository,
} from '../../repositories/projects/projects.repository';

@Injectable()
export class UpdateOneProjectUsecase extends Usecase {
  protected usecaseName = 'Update One Project Usecase';

  constructor(
    @Inject(PROJECTS_REPOSITORY)
    private readonly projectsRepository: ProjectsRepository,
  ) {
    super();
  }

  async handle(dto: UpdateOneProjectDTO) {
    try {
      const exists = await this.projectsRepository.findOneId(dto.id);
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

      const project = await this.projectsRepository.updateOne({
        id: dto.id,
        ...dto,
      });

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
