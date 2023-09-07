import { Module } from '@nestjs/common';
import { AuthController } from '../controllers/auth/auth.controller';
import { RequestResetUserPasswordUsecase } from '../usecases/auth/requestResetUserPasswordToken.usecase';
import { ResetUserPasswordUsecase } from '../usecases/auth/resetUserPassword.usecase';
import { USERS_REPOSITORY } from '../repositories/users/users.repository';
import { UsersConcreteRepository } from '../repositories/users/users.concrete.repository';
import { UpdateOneUserPasswordUsecase } from '../usecases/users/updateOneUserPassword.usecase';
import { MailModule } from './mail.module';

@Module({
  controllers: [AuthController],
  imports: [MailModule],
  providers: [
    RequestResetUserPasswordUsecase,
    ResetUserPasswordUsecase,
    UpdateOneUserPasswordUsecase,
    {
      provide: USERS_REPOSITORY,
      useClass: UsersConcreteRepository,
    },
  ],
  exports: [],
})
export class AuthModule {}
