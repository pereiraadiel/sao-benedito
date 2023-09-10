import { DeleteOneCommunityDTO } from './../../dtos/communities/deleteOneCommunity.dto';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { Public } from '../../decorators/public.decorator';
import { GetAllCommunitiesUsecase } from '../../usecases/communities/getAllCommunities.usecase';
import { CreateOneCommunityDTO } from './../../dtos/communities/createOneCommunity.dto';
import { CreateOneCommunityUsecase } from './../../usecases/communities/createOneCommunity.usecase';
import { DeleteOneCommunityUsecase } from '../../usecases/communities/deleteOneCommunity.usecase';

@Controller('/communities')
export class CommunitiesController {
  constructor(
    private readonly createOneCommunityUsecase: CreateOneCommunityUsecase,
    private readonly getAllCommunitiesUseCase: GetAllCommunitiesUsecase,
    private readonly deleteOneCommunityUsecase: DeleteOneCommunityUsecase,
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

  @Delete('/:id')
  deleteOneCommunity(@Param() request: DeleteOneCommunityDTO) {
    return this.deleteOneCommunityUsecase.handle(request);
  }
}
