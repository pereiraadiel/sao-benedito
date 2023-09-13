import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { GetOneSecretaryTimeByIdUsecase } from './../../usecases/secretaryTimes/getOneSecretaryTimeById.usecase';
import { DeleteOneSecretaryTimeDTO } from './../../dtos/secretaryTimes/deleteOneSecretaryTime.dto';
import { Public } from '../../decorators/public.decorator';
import { GetAllSecretaryTimesUsecase } from '../../usecases/secretaryTimes/getAllSecretaryTimes.usecase';
import { CreateOneSecretaryTimeDTO } from './../../dtos/secretaryTimes/createOneSecretaryTime.dto';
import { CreateOneSecretaryTimeUsecase } from './../../usecases/secretaryTimes/createOneSecretaryTime.usecase';
import { DeleteOneSecretaryTimeUsecase } from '../../usecases/secretaryTimes/deleteOneSecretaryTime.usecase';
import { UpdateOneSecretaryTimeUsecase } from '../../usecases/secretaryTimes/updateOneSecretaryTime.usecase';
import { UpdateOneSecretaryTimeDTO } from '../../dtos/secretaryTimes/updateOneSecretaryTime.dto';
import { GetOneSecretaryTimeByIdDTO } from '../../dtos/secretaryTimes/getOneSecretaryTimeById.dto';

@Controller('/secretaryTimes')
export class SecretaryTimesController {
  constructor(
    private readonly createOneSecretaryTimeUsecase: CreateOneSecretaryTimeUsecase,
    private readonly getAllSecretaryTimesUseCase: GetAllSecretaryTimesUsecase,
    private readonly getOneSecretaryTimeByIdUsecase: GetOneSecretaryTimeByIdUsecase,
    private readonly updateOneSecretaryTimeUseCase: UpdateOneSecretaryTimeUsecase,
    private readonly deleteOneSecretaryTimeUsecase: DeleteOneSecretaryTimeUsecase,
  ) {}

  @Post()
  createOneSecretaryTime(@Body() request: CreateOneSecretaryTimeDTO) {
    return this.createOneSecretaryTimeUsecase.handle(request);
  }

  @Get()
  @Public()
  getAllSecretaryTimes() {
    return this.getAllSecretaryTimesUseCase.handle();
  }

  @Get('/:id')
  @Public()
  getOneSecretaryTime(@Param() request: GetOneSecretaryTimeByIdDTO) {
    return this.getOneSecretaryTimeByIdUsecase.handle(request);
  }

  @Patch('/:id')
  updateOneSecretaryTime(
    @Body() request: UpdateOneSecretaryTimeDTO,
    @Param() { id }: GetOneSecretaryTimeByIdDTO,
  ) {
    return this.updateOneSecretaryTimeUseCase.handle({
      ...request,
      id,
    });
  }

  @Delete('/:id')
  deleteOneSecretaryTime(@Param() request: DeleteOneSecretaryTimeDTO) {
    return this.deleteOneSecretaryTimeUsecase.handle(request);
  }
}
