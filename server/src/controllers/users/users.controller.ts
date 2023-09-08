import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseInterceptors,
} from '@nestjs/common';

import { CreateOneUserDTO } from '../../dtos/users/createOneUser.dto';
import { GetOneUserByIdDTO } from '../../dtos/users/getOneUserById.dto';
import { UpdateOneUserCpfDTO } from '../../dtos/users/updateOneUserCpf.dto';
import { UpdateOneUserEmailDTO } from '../../dtos/users/updateOneUserEmail.dto';
import { UpdateOneUserPhoneDTO } from '../../dtos/users/updateOneUserPhone.dto';
import { UpdateOneUserPersonalInfoDTO } from '../../dtos/users/updateOneUserPersonalInfo.dto';
import { CreateOneUserUsecase } from '../../usecases/users/createOneUser.usecase';
import { GetOneUserByIdUsecase } from '../../usecases/users/getOneUserById.usecase';
import { UpdateOneUserCpfUsecase } from '../../usecases/users/updateOneUserCpf.usecase';
import { UpdateOneUserEmailUsecase } from '../../usecases/users/updateOneUserEmail.usecase';
import { UpdateOneUserPhoneUsecase } from '../../usecases/users/updateOneUserPhone.usecase';
import { UpdateOneUserPersonalInfoUsecase } from '../../usecases/users/updateOneUserPersonalInfo.usecase';
import { AuthInterceptor } from '../../interceptors/auth.interceptor';
import { Request } from 'express';

@UseInterceptors(AuthInterceptor)
@Controller('/users')
export class UsersController {
  constructor(
    private readonly createOneUserUsecase: CreateOneUserUsecase,
    private readonly getOneUserByIdUsecase: GetOneUserByIdUsecase,
    private readonly updateOneUserPersonalInfoUsecase: UpdateOneUserPersonalInfoUsecase,
    private readonly updateOneUserCpfUsecase: UpdateOneUserCpfUsecase,
    private readonly updateOneUserEmailUsecase: UpdateOneUserEmailUsecase,
    private readonly updateOneUserPhoneUsecase: UpdateOneUserPhoneUsecase,
  ) {}

  @Post()
  createOneUser(@Body() request: CreateOneUserDTO, @Req() { token }: Request) {
    return this.createOneUserUsecase.handle(request, token);
  }

  @Get('/:id')
  getOneUserById(
    @Param() request: GetOneUserByIdDTO,
    @Req() { token }: Request,
  ) {
    return this.getOneUserByIdUsecase.handle(request, token);
  }

  @Patch('/:id')
  updateOneUserPersonalInfo(
    @Param() { id }: GetOneUserByIdDTO,
    @Body() request: UpdateOneUserPersonalInfoDTO,
    @Req() { token }: Request,
  ) {
    return this.updateOneUserPersonalInfoUsecase.handle(
      {
        id,
        ...request,
      },
      token,
    );
  }

  @Patch('/:id/cpf')
  updateOneUserCpf(
    @Param() { id }: GetOneUserByIdDTO,
    @Body() request: UpdateOneUserCpfDTO,
    @Req() { token }: Request,
  ) {
    return this.updateOneUserCpfUsecase.handle(
      {
        id,
        ...request,
      },
      token,
    );
  }

  @Patch('/:id/email')
  updateOneUserEmail(
    @Param() { id }: GetOneUserByIdDTO,
    @Body() request: UpdateOneUserEmailDTO,
    @Req() { token }: Request,
  ) {
    return this.updateOneUserEmailUsecase.handle(
      {
        id,
        ...request,
      },
      token,
    );
  }

  @Patch('/:id/phone')
  updateOneUserPhone(
    @Param() { id }: GetOneUserByIdDTO,
    @Body() request: UpdateOneUserPhoneDTO,
    @Req() { token }: Request,
  ) {
    return this.updateOneUserPhoneUsecase.handle(
      {
        id,
        ...request,
      },
      token,
    );
  }
}
