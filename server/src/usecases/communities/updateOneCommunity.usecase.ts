import { Inject, Injectable } from '@nestjs/common';
import { Usecase } from '../usecase';
import {
  COMMUNITIES_REPOSITORY,
  CommunitiesRepository,
} from '../../repositories/communities/communities.repository';
import { UpdateOneCommunityDTO } from '../../dtos/communities/updateOneCommunity.dto';
import { NotFoundException } from '../../exceptions/notFound.exception';

@Injectable()
export class UpdateOneCommunityUsecase extends Usecase {
  protected usecaseName = 'Update One Community Usecase';

  constructor(
    @Inject(COMMUNITIES_REPOSITORY)
    private readonly communitiesRepository: CommunitiesRepository,
  ) {
    super();
  }

  async handle(dto: UpdateOneCommunityDTO) {
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

      const community = await this.communitiesRepository.updateOne({
        id: dto.id,
        ...dto,
      });

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
