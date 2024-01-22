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
import { GetOneNoticeByIdUsecase } from '../../usecases/notices/getOneNoticeById.usecase';
import { DeleteOneNoticeDTO } from '../../dtos/notices/deleteOneNotice.dto';
import { GetAllNoticesUsecase } from '../../usecases/notices/getAllNotices.usecase';
import { CreateOneNoticeDTO } from '../../dtos/notices/createOneNotice.dto';
import { CreateOneNoticeUsecase } from '../../usecases/notices/createOneNotice.usecase';
import { DeleteOneNoticeUsecase } from '../../usecases/notices/deleteOneNotice.usecase';
import { UpdateOneNoticeUsecase } from '../../usecases/notices/updateOneNotice.usecase';
import { UpdateOneNoticeDTO } from '../../dtos/notices/updateOneNotice.dto';
import { GetOneNoticeByIdDTO } from '../../dtos/notices/getOneNoticeById.dto';
import { GetAllNoticesDTO } from '../../dtos/notices/getAllNotices.dto';
import { Role } from '../../decorators/role.decorator';
import { RoleEnum } from '../../enums/role.enum';

@Controller('/notices')
export class NoticesController {
  constructor(
    private readonly createOneNoticeUsecase: CreateOneNoticeUsecase,
    private readonly getAllNoticesUseCase: GetAllNoticesUsecase,
    private readonly getOneNoticeByIdUsecase: GetOneNoticeByIdUsecase,
    private readonly updateOneNoticeUseCase: UpdateOneNoticeUsecase,
    private readonly deleteOneNoticeUsecase: DeleteOneNoticeUsecase,
  ) {}

  @Post()
  @Role([RoleEnum.admin, RoleEnum.super, RoleEnum.priest])
  createOneNotice(@Body() request: CreateOneNoticeDTO) {
    return this.createOneNoticeUsecase.handle(request);
  }

  @Get()
  @Public()
  getAllNotices(@Query() request: GetAllNoticesDTO) {
    return this.getAllNoticesUseCase.handle(request);
  }

  @Get('/:id')
  @Public()
  getOneNotice(@Param() request: GetOneNoticeByIdDTO) {
    return this.getOneNoticeByIdUsecase.handle(request);
  }

  @Patch('/:id')
  @Role([RoleEnum.admin, RoleEnum.super, RoleEnum.priest])
  updateOneNotice(
    @Body() request: UpdateOneNoticeDTO,
    @Param() { id }: GetOneNoticeByIdDTO,
  ) {
    return this.updateOneNoticeUseCase.handle({
      ...request,
      id,
    });
  }

  @Delete('/:id')
  @Role([RoleEnum.admin, RoleEnum.super, RoleEnum.priest])
  deleteOneNotice(@Param() request: DeleteOneNoticeDTO) {
    return this.deleteOneNoticeUsecase.handle(request);
  }
}
