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
import { GetOneEventByIdUsecase } from '../../usecases/events/getOneEventById.usecase';
import { DeleteOneEventDTO } from '../../dtos/events/deleteOneEvent.dto';
import { GetAllEventsUsecase } from '../../usecases/events/getAllEvents.usecase';
import { CreateOneEventDTO } from '../../dtos/events/createOneEvent.dto';
import { CreateOneEventUsecase } from '../../usecases/events/createOneEvent.usecase';
import { DeleteOneEventUsecase } from '../../usecases/events/deleteOneEvent.usecase';
import { UpdateOneEventUsecase } from '../../usecases/events/updateOneEvent.usecase';
import { UpdateOneEventDTO } from '../../dtos/events/updateOneEvent.dto';
import { GetOneEventByIdDTO } from '../../dtos/events/getOneEventById.dto';
import { GetAllEventsDTO } from '../../dtos/events/getAllEvents.dto';

@Controller('/events')
export class EventsController {
  constructor(
    private readonly createOneEventUsecase: CreateOneEventUsecase,
    private readonly getAllEventsUseCase: GetAllEventsUsecase,
    private readonly getOneEventByIdUsecase: GetOneEventByIdUsecase,
    private readonly updateOneEventUseCase: UpdateOneEventUsecase,
    private readonly deleteOneEventUsecase: DeleteOneEventUsecase,
  ) {}

  @Post()
  createOneEvent(@Body() request: CreateOneEventDTO) {
    return this.createOneEventUsecase.handle(request);
  }

  @Get()
  @Public()
  getAllEvents(@Query() request: GetAllEventsDTO) {
    return this.getAllEventsUseCase.handle(request);
  }

  @Get('/:id')
  @Public()
  getOneEvent(@Param() request: GetOneEventByIdDTO) {
    return this.getOneEventByIdUsecase.handle(request);
  }

  @Patch('/:id')
  updateOneEvent(
    @Body() request: UpdateOneEventDTO,
    @Param() { id }: GetOneEventByIdDTO,
  ) {
    return this.updateOneEventUseCase.handle({
      ...request,
      id,
    });
  }

  @Delete('/:id')
  deleteOneEvent(@Param() request: DeleteOneEventDTO) {
    return this.deleteOneEventUsecase.handle(request);
  }
}
