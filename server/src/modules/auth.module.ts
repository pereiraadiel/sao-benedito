import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AuthController } from '../controllers/auth/auth.controller';
import { RequestResetUserPasswordUsecase } from '../usecases/auth/requestResetUserPasswordToken.usecase';
import { ResetUserPasswordUsecase } from '../usecases/auth/resetUserPassword.usecase';
import { USERS_REPOSITORY } from '../repositories/users/users.repository';
import { UsersConcreteRepository } from '../repositories/users/users.concrete.repository';
import { UpdateOneUserPasswordUsecase } from '../usecases/users/updateOneUserPassword.usecase';
import { MailModule } from './mail.module';
import { SignUserInUsecase } from '../usecases/auth/signUserIn.usecase';
import { AuthConstant } from '../constants/auth.constant';
import { RefreshUserTokenUsecase } from '../usecases/auth/refreshUserToken.usecase';

@Module({
  controllers: [AuthController],
  imports: [
    MailModule,
    JwtModule.register({
      global: true,
      secret: AuthConstant.jwt.secret,
      signOptions: { expiresIn: AuthConstant.jwt.expiresIn + 's' },
    }),
  ],
  providers: [
    RequestResetUserPasswordUsecase,
    ResetUserPasswordUsecase,
    RefreshUserTokenUsecase,
    UpdateOneUserPasswordUsecase,
    SignUserInUsecase,
    {
      provide: USERS_REPOSITORY,
      useClass: UsersConcreteRepository,
    },
  ],
  exports: [],
})
export class AuthModule {}
