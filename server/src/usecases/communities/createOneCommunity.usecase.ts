import { Inject, Injectable } from '@nestjs/common';
import { Usecase } from '../usecase';
import {
  COMMUNITIES_REPOSITORY,
  CommunitiesRepository,
} from '../../repositories/communities/communities.repository';
import { CreateOneCommunityDTO } from '../../dtos/communities/createOneCommunity.dto';

@Injectable()
export class CreateOneCommunityUsecase extends Usecase {
  protected usecaseName = 'Create One Community Usecase';

  constructor(
    @Inject(COMMUNITIES_REPOSITORY)
    private readonly communitiesRepository: CommunitiesRepository,
  ) {
    super();
  }

  async handle(dto: CreateOneCommunityDTO) {
    try {
      const community = await this.communitiesRepository.createOne(dto);
      return community;
    } catch (error) {
      this.exceptionHandler(error, [
        {
          name: dto.name,
        },
      ]);
    }
  }
}
