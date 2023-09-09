import { Injectable } from '@nestjs/common';
import { CreateMediaDAO } from '../../daos/medias/createMedia.dao';
import { MediaEntity } from '../../entities/media.entity';
import { MediasRepository } from './medias.repository';
import { PrismaService } from '../../services/prisma.service';

@Injectable()
export class MediasConcreteRepository implements MediasRepository {
  constructor(private readonly database: PrismaService) {}

  async createOne(dao: CreateMediaDAO): Promise<MediaEntity> {
    const entity = new MediaEntity(dao);

    const media = await this.database.media.create({
      data: {
        ...entity,
        event: undefined,
        project: undefined,
      },
    });

    return media;
  }

  async getOneBtId(id: string): Promise<MediaEntity> {
    const media = await this.database.media.findUnique({
      where: {
        id,
      },
    });

    return media;
  }
}
