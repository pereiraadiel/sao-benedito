import { Module } from '@nestjs/common';
import { UsersController } from '../controllers/users/users.controller';
import { CreateOneUserUsecase } from '../usecases/users/createOneUser.usecase';
import { USERS_REPOSITORY } from '../repositories/users/users.repository';
import { UsersConcreteRepository } from '../repositories/users/users.concrete.repository';
import { GetOneUserByIdUsecase } from '../usecases/users/getOneUserById.usecase';
import { UpdateOneUserPersonalInfoUsecase } from '../usecases/users/updateOneUserPersonalInfo.usecase';

@Module({
  controllers: [UsersController],
  providers: [
    CreateOneUserUsecase,
    GetOneUserByIdUsecase,
    UpdateOneUserPersonalInfoUsecase,
    {
      provide: USERS_REPOSITORY,
      useClass: UsersConcreteRepository,
    },
  ],
})
export class UsersModule {}
