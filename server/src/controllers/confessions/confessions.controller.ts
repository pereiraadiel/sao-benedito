import { GetOneConfessionByIdUsecase } from './../../usecases/confessions/getOneConfessionById.usecase';
import { DeleteOneConfessionDTO } from './../../dtos/confessions/deleteOneConfession.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { Public } from '../../decorators/public.decorator';
import { GetAllConfessionsUsecase } from '../../usecases/confessions/getAllConfessions.usecase';
import { CreateOneConfessionDTO } from './../../dtos/confessions/createOneConfession.dto';
import { CreateOneConfessionUsecase } from './../../usecases/confessions/createOneConfession.usecase';
import { DeleteOneConfessionUsecase } from '../../usecases/confessions/deleteOneConfession.usecase';
import { UpdateOneConfessionUsecase } from '../../usecases/confessions/updateOneConfession.usecase';
import { UpdateOneConfessionDTO } from '../../dtos/confessions/updateOneConfession.dto';
import { GetOneConfessionByIdDTO } from '../../dtos/confessions/getOneConfessionById.dto';

@Controller('/confessions')
export class ConfessionsController {
  constructor(
    private readonly createOneConfessionUsecase: CreateOneConfessionUsecase,
    private readonly getAllConfessionsUseCase: GetAllConfessionsUsecase,
    private readonly getOneConfessionByIdUsecase: GetOneConfessionByIdUsecase,
    private readonly updateOneConfessionUseCase: UpdateOneConfessionUsecase,
    private readonly deleteOneConfessionUsecase: DeleteOneConfessionUsecase,
  ) {}

  @Post()
  createOneConfession(@Body() request: CreateOneConfessionDTO) {
    return this.createOneConfessionUsecase.handle(request);
  }

  @Get()
  @Public()
  getAllConfessions() {
    return this.getAllConfessionsUseCase.handle();
  }

  @Get('/:id')
  @Public()
  getOneConfession(@Param() request: GetOneConfessionByIdDTO) {
    return this.getOneConfessionByIdUsecase.handle(request);
  }

  @Patch('/:id')
  updateOneConfession(
    @Body() request: UpdateOneConfessionDTO,
    @Param() { id }: GetOneConfessionByIdDTO,
  ) {
    return this.updateOneConfessionUseCase.handle({
      ...request,
      id,
    });
  }

  @Delete('/:id')
  deleteOneConfession(@Param() request: DeleteOneConfessionDTO) {
    return this.deleteOneConfessionUsecase.handle(request);
  }
}
