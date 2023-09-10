import { Inject, Injectable } from '@nestjs/common';
import { Usecase } from '../usecase';
import {
  COMMUNITIES_REPOSITORY,
  CommunitiesRepository,
} from '../../repositories/communities/communities.repository';

@Injectable()
export class GetAllCommunitiesUsecase extends Usecase {
  protected usecaseName = 'Get All Communities Usecase';

  constructor(
    @Inject(COMMUNITIES_REPOSITORY)
    private readonly communitiesRepository: CommunitiesRepository,
  ) {
    super();
  }

  async handle() {
    try {
      const communities = await this.communitiesRepository.findMany();

      return this.buildPage(communities);
    } catch (error) {
      this.exceptionHandler(error, []);
    }
  }
}
