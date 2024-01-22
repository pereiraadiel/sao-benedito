import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';

import { ResetUserPasswordDTO } from '../../dtos/auth/resetUserPassword.dto';
import { Public } from '../../decorators/public.decorator';
import { SignUserInDTO } from '../../dtos/auth/signUserIn.dto';
import { SignUserOutDTO } from '../../dtos/auth/signUserOut.dto';
import { RefreshUserTokenDTO } from '../../dtos/auth/refreshUserToken.dto';
import { RequestResetUserPasswordTokenDTO } from './../../dtos/auth/requestResetUserPasswordToken.dto';
import { ResetUserPasswordUsecase } from './../../usecases/auth/resetUserPassword.usecase';
import { RequestResetUserPasswordUsecase } from '../../usecases/auth/requestResetUserPasswordToken.usecase';
import { SignUserInUsecase } from '../../usecases/auth/signUserIn.usecase';
import { RefreshUserTokenUsecase } from '../../usecases/auth/refreshUserToken.usecase';
import { SignUserOutUsecase } from '../../usecases/auth/signUserOut.usecase';

@Controller('/auth')
@Public()
export class AuthController {
  constructor(
    private readonly requestResetUserPasswordTokenUsecase: RequestResetUserPasswordUsecase,
    private readonly resetUserPasswordUsecase: ResetUserPasswordUsecase,
    private readonly refreshUserTokenUsecase: RefreshUserTokenUsecase,
    private readonly signUserInUsecase: SignUserInUsecase,
    private readonly signUserOutUsecase: SignUserOutUsecase,
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

  @Post('/sign/out')
  @HttpCode(HttpStatus.OK)
  @Public()
  signUserOut(@Body() request: SignUserOutDTO) {
    return this.signUserOutUsecase.handle(request);
  }
}
