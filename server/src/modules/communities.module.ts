import { Module } from '@nestjs/common';

import { COMMUNITIES_REPOSITORY } from '../repositories/communities/communities.repository';
import { CommunitiesConcreteRepository } from '../repositories/communities/communities.concrete.repository';
import { CommunitiesController } from '../controllers/communities/communities.controller';
import { CreateOneCommunityUsecase } from '../usecases/communities/createOneCommunity.usecase';
import { GetOneCommunityByIdUsecase } from '../usecases/communities/getOneCommunityById.usecase';
import { GetAllCommunitiesUsecase } from '../usecases/communities/getAllCommunities.usecase';
import { DeleteOneCommunityUsecase } from '../usecases/communities/deleteOneCommunity.usecase';
import { UpdateOneCommunityUsecase } from '../usecases/communities/updateOneCommunity.usecase';

@Module({
  controllers: [CommunitiesController],
  providers: [
    CreateOneCommunityUsecase,
    GetAllCommunitiesUsecase,
    GetOneCommunityByIdUsecase,
    UpdateOneCommunityUsecase,
    DeleteOneCommunityUsecase,
    {
      provide: COMMUNITIES_REPOSITORY,
      useClass: CommunitiesConcreteRepository,
    },
  ],
  exports: [],
})
export class CommunitiesModule {}
