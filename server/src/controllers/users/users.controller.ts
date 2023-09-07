import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

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
  createOneUser(@Body() request: CreateOneUserDTO) {
    return this.createOneUserUsecase.handle(request);
  }

  @Get('/:id')
  getOneUserById(@Param() request: GetOneUserByIdDTO) {
    return this.getOneUserByIdUsecase.handle(request);
  }

  @Patch('/:id')
  updateOneUserPersonalInfo(
    @Param() { id }: GetOneUserByIdDTO,
    @Body() request: UpdateOneUserPersonalInfoDTO,
  ) {
    return this.updateOneUserPersonalInfoUsecase.handle({
      id,
      ...request,
    });
  }

  @Patch('/:id/cpf')
  updateOneUserCpf(
    @Param() { id }: GetOneUserByIdDTO,
    @Body() request: UpdateOneUserCpfDTO,
  ) {
    return this.updateOneUserCpfUsecase.handle({
      id,
      ...request,
    });
  }

  @Patch('/:id/email')
  updateOneUserEmail(
    @Param() { id }: GetOneUserByIdDTO,
    @Body() request: UpdateOneUserEmailDTO,
  ) {
    return this.updateOneUserEmailUsecase.handle({
      id,
      ...request,
    });
  }

  @Patch('/:id/phone')
  updateOneUserPhone(
    @Param() { id }: GetOneUserByIdDTO,
    @Body() request: UpdateOneUserPhoneDTO,
  ) {
    return this.updateOneUserPhoneUsecase.handle({
      id,
      ...request,
    });
  }
}
