import { GetOneCommunityByIdUsecase } from './../../usecases/communities/getOneCommunityById.usecase';
import { DeleteOneCommunityDTO } from './../../dtos/communities/deleteOneCommunity.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { Public } from '../../decorators/public.decorator';
import { GetAllCommunitiesUsecase } from '../../usecases/communities/getAllCommunities.usecase';
import { CreateOneCommunityDTO } from './../../dtos/communities/createOneCommunity.dto';
import { CreateOneCommunityUsecase } from './../../usecases/communities/createOneCommunity.usecase';
import { DeleteOneCommunityUsecase } from '../../usecases/communities/deleteOneCommunity.usecase';
import { UpdateOneCommunityUsecase } from '../../usecases/communities/updateOneCommunity.usecase';
import { UpdateOneCommunityDTO } from '../../dtos/communities/updateOneCommunity.dto';
import { GetOneCommunityByIdDTO } from '../../dtos/communities/getOneCommunityById.dto';

@Controller('/communities')
export class CommunitiesController {
  constructor(
    private readonly createOneCommunityUsecase: CreateOneCommunityUsecase,
    private readonly getAllCommunitiesUseCase: GetAllCommunitiesUsecase,
    private readonly getOneCommunityByIdUsecase: GetOneCommunityByIdUsecase,
    private readonly updateOneCommunityUseCase: UpdateOneCommunityUsecase,
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

  @Get('/:id')
  @Public()
  getOneCommunity(@Param() request: GetOneCommunityByIdDTO) {
    return this.getOneCommunityByIdUsecase.handle(request);
  }

  @Patch('/:id')
  updateOneCommunity(
    @Body() request: UpdateOneCommunityDTO,
    @Param() { id }: GetOneCommunityByIdDTO,
  ) {
    return this.updateOneCommunityUseCase.handle({
      ...request,
      id,
    });
  }

  @Delete('/:id')
  deleteOneCommunity(@Param() request: DeleteOneCommunityDTO) {
    return this.deleteOneCommunityUsecase.handle(request);
  }
}
