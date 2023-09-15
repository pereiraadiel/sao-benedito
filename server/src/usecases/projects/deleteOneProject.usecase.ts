import { Inject, Injectable } from '@nestjs/common';
import { Usecase } from '../usecase';
import { DeleteOneProjectDTO } from '../../dtos/projects/deleteOneProject.dto';
import { NotFoundException } from '../../exceptions/notFound.exception';
import {
  PROJECTS_REPOSITORY,
  ProjectsRepository,
} from '../../repositories/projects/projects.repository';

@Injectable()
export class DeleteOneProjectUsecase extends Usecase {
  protected usecaseName = 'Delete One Project Usecase';

  constructor(
    @Inject(PROJECTS_REPOSITORY)
    private readonly projectsRepository: ProjectsRepository,
  ) {
    super();
  }

  async handle(dto: DeleteOneProjectDTO) {
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

      await this.projectsRepository.deleteOneById(dto.id);
    } catch (error) {
      this.exceptionHandler(error, [
        {
          id: dto.id,
        },
      ]);
    }
  }
}
