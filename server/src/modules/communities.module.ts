import { Module } from '@nestjs/common';

import { COMMUNITIES_REPOSITORY } from '../repositories/communities/communities.repository';
import { CommunitiesConcreteRepository } from '../repositories/communities/communities.concrete.repository';
import { CreateOneCommunityUsecase } from '../usecases/communities/createOneCommunity.usecase';
import { CommunitiesController } from '../controllers/communities/communities.controller';
import { GetAllCommunitiesUsecase } from '../usecases/communities/getAllCommunities.usecase';
import { DeleteOneCommunityUsecase } from '../usecases/communities/deleteOneCommunity.usecase';

@Module({
  controllers: [CommunitiesController],
  providers: [
    CreateOneCommunityUsecase,
    GetAllCommunitiesUsecase,
    DeleteOneCommunityUsecase,
    {
      provide: COMMUNITIES_REPOSITORY,
      useClass: CommunitiesConcreteRepository,
    },
  ],
  exports: [],
})
export class CommunitiesModule {}
