import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateOneUserDTO } from '../../dtos/users/createOneUser.dto';
import { CreateOneUserUsecase } from '../../usecases/users/createOneUser.usecase';
import { GetOneUserByIdDTO } from '../../dtos/users/getOneUserById.dto';
import { GetOneUserByIdUsecase } from '../../usecases/users/getOneUserById.usecase';
import { UpdateOneUserPersonalInfoDTO } from '../../dtos/users/updateOneUserPersonalInfo.dto';
import { UpdateOneUserPersonalInfoUsecase } from '../../usecases/users/updateOneUserPersonalInfo.usecase';

@Controller('/users')
export class UsersController {
  constructor(
    private readonly createOneUserUsecase: CreateOneUserUsecase,
    private readonly getOneUserByIdUsecase: GetOneUserByIdUsecase,
    private readonly updateOneUserPersonalInfoUsecase: UpdateOneUserPersonalInfoUsecase,
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
}
