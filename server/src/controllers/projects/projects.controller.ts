import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { Public } from '../../decorators/public.decorator';
import { GetOneProjectByIdUsecase } from '../../usecases/projects/getOneProjectById.usecase';
import { DeleteOneProjectDTO } from '../../dtos/projects/deleteOneProject.dto';
import { GetAllProjectsUsecase } from '../../usecases/projects/getAllProjects.usecase';
import { CreateOneProjectDTO } from '../../dtos/projects/createOneProject.dto';
import { CreateOneProjectUsecase } from '../../usecases/projects/createOneProject.usecase';
import { DeleteOneProjectUsecase } from '../../usecases/projects/deleteOneProject.usecase';
import { UpdateOneProjectUsecase } from '../../usecases/projects/updateOneProject.usecase';
import { UpdateOneProjectDTO } from '../../dtos/projects/updateOneProject.dto';
import { GetOneProjectByIdDTO } from '../../dtos/projects/getOneProjectById.dto';
import { GetAllProjectsDTO } from '../../dtos/projects/getAllProjects.dto';

@Controller('/projects')
export class ProjectsController {
  constructor(
    private readonly createOneProjectUsecase: CreateOneProjectUsecase,
    private readonly getAllProjectsUseCase: GetAllProjectsUsecase,
    private readonly getOneProjectByIdUsecase: GetOneProjectByIdUsecase,
    private readonly updateOneProjectUseCase: UpdateOneProjectUsecase,
    private readonly deleteOneProjectUsecase: DeleteOneProjectUsecase,
  ) {}

  @Post()
  createOneProject(@Body() request: CreateOneProjectDTO) {
    return this.createOneProjectUsecase.handle(request);
  }

  @Get()
  @Public()
  getAllProjects(@Query() request: GetAllProjectsDTO) {
    return this.getAllProjectsUseCase.handle(request);
  }

  @Get('/:id')
  @Public()
  getOneProject(@Param() request: GetOneProjectByIdDTO) {
    return this.getOneProjectByIdUsecase.handle(request);
  }

  @Patch('/:id')
  updateOneProject(
    @Body() request: UpdateOneProjectDTO,
    @Param() { id }: GetOneProjectByIdDTO,
  ) {
    return this.updateOneProjectUseCase.handle({
      ...request,
      id,
    });
  }

  @Delete('/:id')
  deleteOneProject(@Param() request: DeleteOneProjectDTO) {
    return this.deleteOneProjectUsecase.handle(request);
  }
}
