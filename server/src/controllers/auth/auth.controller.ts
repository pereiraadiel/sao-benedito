import { Body, Controller, Post } from '@nestjs/common';

import { ResetUserPasswordDTO } from '../../dtos/auth/resetUserPassword.dto';
import { RequestResetUserPasswordTokenDTO } from './../../dtos/auth/requestResetUserPasswordToken.dto';
import { ResetUserPasswordUsecase } from './../../usecases/auth/resetUserPassword.usecase';
import { RequestResetUserPasswordUsecase } from '../../usecases/auth/requestResetUserPasswordToken.usecase';

@Controller('/auth')
export class AuthController {
  constructor(
    private readonly requestResetUserPasswordTokenUsecase: RequestResetUserPasswordUsecase,
    private readonly resetUserPasswordUsecase: ResetUserPasswordUsecase,
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
}
