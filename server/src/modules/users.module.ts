import { Module } from '@nestjs/common';
import { UsersController } from '../controllers/users/users.controller';
import { CreateOneUserUsecase } from '../usecases/users/createOneUser.usecase';
import { USERS_REPOSITORY } from '../repositories/users/users.repository';
import { UsersConcreteRepository } from '../repositories/users/users.concrete.repository';
import { GetOneUserByIdUsecase } from '../usecases/users/getOneUserById.usecase';
import { UpdateOneUserPersonalInfoUsecase } from '../usecases/users/updateOneUserPersonalInfo.usecase';
import { UpdateOneUserEmailUsecase } from '../usecases/users/updateOneUserEmail.usecase';
import { UpdateOneUserCpfUsecase } from '../usecases/users/updateOneUserCpf.usecase';
import { UpdateOneUserPhoneUsecase } from '../usecases/users/updateOneUserPhone.usecase';

@Module({
  controllers: [UsersController],
  providers: [
    CreateOneUserUsecase,
    GetOneUserByIdUsecase,
    UpdateOneUserPersonalInfoUsecase,
    UpdateOneUserEmailUsecase,
    UpdateOneUserCpfUsecase,
    UpdateOneUserPhoneUsecase,
    {
      provide: USERS_REPOSITORY,
      useClass: UsersConcreteRepository,
    },
  ],
})
export class UsersModule {}
