import { Inject, Injectable } from '@nestjs/common';
import { Usecase } from '../usecase';
import {
  COMMUNITIES_REPOSITORY,
  CommunitiesRepository,
} from '../../repositories/communities/communities.repository';
import { GetOneUserByIdDTO } from '../../dtos/users/getOneUserById.dto';
import { NotFoundException } from '../../exceptions/notFound.exception';

@Injectable()
export class GetOneCommunityByIdUsecase extends Usecase {
  protected usecaseName = 'Get One Community By Id Usecase';

  constructor(
    @Inject(COMMUNITIES_REPOSITORY)
    private readonly communitiesRepository: CommunitiesRepository,
  ) {
    super();
  }

  async handle(dto: GetOneUserByIdDTO) {
    try {
      const community = await this.communitiesRepository.findOneId(dto.id);
      if (!community) {
        throw new NotFoundException(
          [
            {
              id: dto.id,
            },
          ],
          this.usecaseName,
        );
      }
      return community;
    } catch (error) {
      this.exceptionHandler(error, [
        {
          id: dto.id,
        },
      ]);
    }
  }
}
