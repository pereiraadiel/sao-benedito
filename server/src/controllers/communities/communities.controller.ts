import { CreateOneCommunityDTO } from './../../dtos/communities/createOneCommunity.dto';
import { CreateOneCommunityUsecase } from './../../usecases/communities/createOneCommunity.usecase';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('/communities')
export class CommunitiesController {
  constructor(
    private readonly createOneCommunityUsecase: CreateOneCommunityUsecase,
  ) {}

  @Post()
  createOneCommunity(@Body() request: CreateOneCommunityDTO) {
    return this.createOneCommunityUsecase.handle(request);
  }
}
