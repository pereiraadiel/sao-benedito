import { Body, Controller, Post } from '@nestjs/common';

import { ResetUserPasswordDTO } from '../../dtos/auth/resetUserPassword.dto';
import { RequestResetUserPasswordTokenDTO } from './../../dtos/auth/requestResetUserPasswordToken.dto';
import { ResetUserPasswordUsecase } from './../../usecases/auth/resetUserPassword.usecase';
import { RequestResetUserPasswordUsecase } from '../../usecases/auth/requestResetUserPasswordToken.usecase';
import { SignUserInDTO } from '../../dtos/auth/signUserIn.dto';
import { SignUserInUsecase } from '../../usecases/auth/signUserIn.usecase';
import { RefreshUserTokenDTO } from '../../dtos/auth/refreshUserToken.dto';
import { RefreshUserTokenUsecase } from '../../usecases/auth/refreshUserToken.usecase';
import { Public } from '../../decorators/public.decorator';

@Controller('/auth')
@Public()
export class AuthController {
  constructor(
    private readonly requestResetUserPasswordTokenUsecase: RequestResetUserPasswordUsecase,
    private readonly resetUserPasswordUsecase: ResetUserPasswordUsecase,
    private readonly refreshUserTokenUsecase: RefreshUserTokenUsecase,
    private readonly signUserInUsecase: SignUserInUsecase,
  ) {}

  @Post('/reset/request')
  @Public()
  requestResetUserPasswordToken(
    @Body() request: RequestResetUserPasswordTokenDTO,
  ) {
    return this.requestResetUserPasswordTokenUsecase.handle(request);
  }

  @Post('/reset')
  @Public()
  resetUserPassword(@Body() request: ResetUserPasswordDTO) {
    return this.resetUserPasswordUsecase.handle(request);
  }

  @Post('/refresh')
  @Public()
  refreshUserToken(@Body() request: RefreshUserTokenDTO) {
    return this.refreshUserTokenUsecase.handle(request);
  }

  @Post('/sign/in')
  @Public()
  signUserIn(@Body() request: SignUserInDTO) {
    return this.signUserInUsecase.handle(request);
  }
}
