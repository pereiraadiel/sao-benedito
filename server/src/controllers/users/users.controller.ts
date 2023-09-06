import { Body, Controller, Post } from '@nestjs/common';
import { CreateOneUserDTO } from '../../dtos/users/createOneUser.dto';
import { CreateOneUserUsecase } from '../../usecases/users/createOneUser.usecase';

@Controller('/users')
export class UsersController {
  constructor(private readonly createOneUserUsecase: CreateOneUserUsecase) {}

  @Post()
  createOneUser(@Body() request: CreateOneUserDTO) {
    return this.createOneUserUsecase.handle(request);
  }
}
