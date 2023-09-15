import { Module } from '@nestjs/common';

import { PROJECTS_REPOSITORY } from '../repositories/projects/projects.repository';
import { ProjectsConcreteRepository } from '../repositories/projects/projects.concrete.repository';
import { ProjectsController } from '../controllers/projects/projects.controller';
import { CreateOneProjectUsecase } from '../usecases/projects/createOneProject.usecase';
import { GetOneProjectByIdUsecase } from '../usecases/projects/getOneProjectById.usecase';
import { GetAllProjectsUsecase } from '../usecases/projects/getAllProjects.usecase';
import { DeleteOneProjectUsecase } from '../usecases/projects/deleteOneProject.usecase';
import { UpdateOneProjectUsecase } from '../usecases/projects/updateOneProject.usecase';

@Module({
  controllers: [ProjectsController],
  providers: [
    CreateOneProjectUsecase,
    GetAllProjectsUsecase,
    GetOneProjectByIdUsecase,
    UpdateOneProjectUsecase,
    DeleteOneProjectUsecase,
    {
      provide: PROJECTS_REPOSITORY,
      useClass: ProjectsConcreteRepository,
    },
  ],
  exports: [],
})
export class ProjectsModule {}
