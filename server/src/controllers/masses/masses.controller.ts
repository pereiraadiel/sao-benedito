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
import { GetOneMassByIdUsecase } from './../../usecases/masses/getOneMassById.usecase';
import { DeleteOneMassDTO } from './../../dtos/masses/deleteOneMass.dto';
import { GetAllMassesUsecase } from '../../usecases/masses/getAllMasses.usecase';
import { CreateOneMassDTO } from './../../dtos/masses/createOneMass.dto';
import { CreateOneMassUsecase } from './../../usecases/masses/createOneMass.usecase';
import { DeleteOneMassUsecase } from '../../usecases/masses/deleteOneMass.usecase';
import { UpdateOneMassUsecase } from '../../usecases/masses/updateOneMass.usecase';
import { UpdateOneMassDTO } from '../../dtos/masses/updateOneMass.dto';
import { GetOneMassByIdDTO } from '../../dtos/masses/getOneMassById.dto';

@Controller('/masses')
export class MassesController {
  constructor(
    private readonly createOneMassUsecase: CreateOneMassUsecase,
    private readonly getAllMassesUseCase: GetAllMassesUsecase,
    private readonly getOneMassByIdUsecase: GetOneMassByIdUsecase,
    private readonly updateOneMassUseCase: UpdateOneMassUsecase,
    private readonly deleteOneMassUsecase: DeleteOneMassUsecase,
  ) {}

  @Post()
  createOneMass(@Body() request: CreateOneMassDTO) {
    return this.createOneMassUsecase.handle(request);
  }

  @Get()
  @Public()
  getAllMasses() {
    return this.getAllMassesUseCase.handle();
  }

  @Get('/:id')
  @Public()
  getOneMass(@Param() request: GetOneMassByIdDTO) {
    return this.getOneMassByIdUsecase.handle(request);
  }

  @Patch('/:id')
  updateOneMass(
    @Body() request: UpdateOneMassDTO,
    @Param() { id }: GetOneMassByIdDTO,
  ) {
    return this.updateOneMassUseCase.handle({
      ...request,
      id,
    });
  }

  @Delete('/:id')
  deleteOneMass(@Param() request: DeleteOneMassDTO) {
    return this.deleteOneMassUsecase.handle(request);
  }
}
