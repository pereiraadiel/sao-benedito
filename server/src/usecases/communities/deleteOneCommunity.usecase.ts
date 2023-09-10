import { Inject, Injectable } from '@nestjs/common';
import { Usecase } from '../usecase';
import {
  COMMUNITIES_REPOSITORY,
  CommunitiesRepository,
} from '../../repositories/communities/communities.repository';
import { DeleteOneCommunityDTO } from '../../dtos/communities/deleteOneCommunity.dto';
import { NotFoundException } from '../../exceptions/notFound.exception';

@Injectable()
export class DeleteOneCommunityUsecase extends Usecase {
  protected usecaseName = 'Delete One Community Usecase';

  constructor(
    @Inject(COMMUNITIES_REPOSITORY)
    private readonly communitiesRepository: CommunitiesRepository,
  ) {
    super();
  }

  async handle(dto: DeleteOneCommunityDTO) {
    try {
      const exists = await this.communitiesRepository.findOneId(dto.id);
      if (!exists) {
        throw new NotFoundException(
          [
            {
              id: dto.id,
            },
          ],
          this.usecaseName,
        );
      }

      await this.communitiesRepository.deleteOneById(dto.id);
    } catch (error) {
      this.exceptionHandler(error, [
        {
          id: dto.id,
        },
      ]);
    }
  }
}
