import { Injectable } from '@nestjs/common';
import { CommunitiesRepository } from './communities.repository';
import { CreateOneCommunityDAO } from '../../daos/communities/createOneCommunity.dao';
import { UpdateOneCommunityDAO } from '../../daos/communities/updateOneCommunity.dao';
import { CommunityEntity } from '../../entities/community.entity';
import { PrismaService } from '../../services/prisma.service';

@Injectable()
export class CommunitiesConcreteRepository implements CommunitiesRepository {
  constructor(private readonly database: PrismaService) {}

  async createOne(dao: CreateOneCommunityDAO): Promise<CommunityEntity> {
    const entity = new CommunityEntity(dao);
    const community = await this.database.community.create({
      data: {
        ...entity,
        masses: undefined,
        projects: undefined,
        events: undefined,
        confessions: undefined,
        secretaryTimes: undefined,
      },
      include: {
        confessions: true,
        events: true,
        masses: true,
        projects: true,
        secretaryTimes: true,
      },
    });

    return community;
  }

  async findOneId(id: string): Promise<CommunityEntity> {
    const community = await this.database.community.findUnique({
      where: {
        id,
      },
      include: {
        confessions: true,
        events: true,
        masses: true,
        projects: true,
        secretaryTimes: true,
      },
    });

    return community;
  }

  async findMany(): Promise<CommunityEntity[]> {
    const communities = await this.database.community.findMany();
    return communities;
  }

  async updateOne(dao: UpdateOneCommunityDAO): Promise<CommunityEntity> {
    const updateDao = {
      ...dao,
      id: undefined,
      updatedAt: new Date(),
    };

    const community = await this.database.community.update({
      where: {
        id: dao.id,
      },
      data: updateDao,
      include: {
        confessions: true,
        events: true,
        masses: true,
        projects: true,
        secretaryTimes: true,
      },
    });

    return community;
  }

  async deleteOneById(id: string): Promise<void> {
    await this.database.community.delete({
      where: {
        id,
      },
    });
  }
}
