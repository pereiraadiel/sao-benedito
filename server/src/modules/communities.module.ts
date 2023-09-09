import { Module } from '@nestjs/common';

import { COMMUNITIES_REPOSITORY } from '../repositories/communities/communities.repository';
import { CommunitiesConcreteRepository } from '../repositories/communities/communities.concrete.repository';
import { CreateOneCommunityUsecase } from '../usecases/communities/createOneCommunity.usecase';
import { CommunitiesController } from '../controllers/communities/communities.controller';

@Module({
  controllers: [CommunitiesController],
  providers: [
    CreateOneCommunityUsecase,
    {
      provide: COMMUNITIES_REPOSITORY,
      useClass: CommunitiesConcreteRepository,
    },
  ],
  exports: [],
})
export class CommunitiesModule {}
