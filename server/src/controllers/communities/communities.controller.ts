import { Body, Controller, Get, Post } from '@nestjs/common';

import { Public } from '../../decorators/public.decorator';
import { GetAllCommunitiesUsecase } from '../../usecases/communities/getAllCommunities.usecase';
import { CreateOneCommunityDTO } from './../../dtos/communities/createOneCommunity.dto';
import { CreateOneCommunityUsecase } from './../../usecases/communities/createOneCommunity.usecase';

@Controller('/communities')
export class CommunitiesController {
  constructor(
    private readonly createOneCommunityUsecase: CreateOneCommunityUsecase,
    private readonly getAllCommunitiesUseCase: GetAllCommunitiesUsecase,
  ) {}

  @Post()
  createOneCommunity(@Body() request: CreateOneCommunityDTO) {
    return this.createOneCommunityUsecase.handle(request);
  }

  @Get()
  @Public()
  getAllCommunities() {
    return this.getAllCommunitiesUseCase.handle();
  }
}
