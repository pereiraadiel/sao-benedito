import { Module } from '@nestjs/common';
import { UsersController } from '../controllers/users/users.controller';
import { CreateOneUserUsecase } from '../usecases/users/createOneUser.usecase';
import { USERS_REPOSITORY } from '../repositories/users/users.repository';
import { UsersConcreteRepository } from '../repositories/users/users.concrete.repository';

@Module({
  controllers: [UsersController],
  providers: [
    CreateOneUserUsecase,
    {
      provide: USERS_REPOSITORY,
      useClass: UsersConcreteRepository,
    },
  ],
})
export class UsersModule {}
