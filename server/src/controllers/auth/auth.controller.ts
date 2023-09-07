import { Body, Controller, Post } from '@nestjs/common';

import { ResetUserPasswordDTO } from '../../dtos/auth/resetUserPassword.dto';
import { RequestResetUserPasswordTokenDTO } from './../../dtos/auth/requestResetUserPasswordToken.dto';
import { ResetUserPasswordUsecase } from './../../usecases/auth/resetUserPassword.usecase';
import { RequestResetUserPasswordUsecase } from '../../usecases/auth/requestResetUserPasswordToken.usecase';
import { SignUserInDTO } from '../../dtos/auth/signUserIn.dto';
import { SignUserInUsecase } from '../../usecases/auth/signUserIn.usecase';

@Controller('/auth')
export class AuthController {
  constructor(
    private readonly requestResetUserPasswordTokenUsecase: RequestResetUserPasswordUsecase,
    private readonly resetUserPasswordUsecase: ResetUserPasswordUsecase,
    private readonly signUserInUsecase: SignUserInUsecase,
  ) {}

  @Post('/reset/request')
  requestResetUserPasswordToken(
    @Body() request: RequestResetUserPasswordTokenDTO,
  ) {
    return this.requestResetUserPasswordTokenUsecase.handle(request);
  }

  @Post('/reset')
  resetUserPassword(@Body() request: ResetUserPasswordDTO) {
    return this.resetUserPasswordUsecase.handle(request);
  }

  @Post('/sign/in')
  signUserIn(@Body() request: SignUserInDTO) {
    return this.signUserInUsecase.handle(request);
  }
}
