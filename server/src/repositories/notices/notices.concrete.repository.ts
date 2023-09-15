import { Injectable } from '@nestjs/common';
import { NoticesRepository } from './notices.repository';
import { CreateOneNoticeDAO } from '../../daos/notices/createOneNotice.dao';
import { UpdateOneNoticeDAO } from '../../daos/notices/updateOneNotice.dao';
import { NoticeEntity } from '../../entities/notice.entity';
import { PrismaService } from '../../services/prisma.service';
import { GetAllNoticesDAO } from '../../daos/notices/getAllNotices.dao';

@Injectable()
export class NoticesConcreteRepository implements NoticesRepository {
  constructor(private readonly database: PrismaService) {}

  async createOne(dao: CreateOneNoticeDAO): Promise<NoticeEntity> {
    const entity = new NoticeEntity(dao);
    delete (entity as any).communityId;

    const notice = await this.database.notice.create({
      data: {
        ...entity,
      },
    });

    return notice as unknown as NoticeEntity;
  }

  async findOneId(id: string): Promise<NoticeEntity> {
    const notice = await this.database.notice.findUnique({
      where: {
        id,
      },
    });

    return notice as unknown as NoticeEntity;
  }

  async findMany(dao: GetAllNoticesDAO): Promise<NoticeEntity[]> {
    const notices = await this.database.notice.findMany({
      where: {
        AND: {
          notifyUntil: {
            lte: dao.filterUntilDate,
          },
        },
      },
    });
    return notices as unknown as NoticeEntity[];
  }

  async updateOne(dao: UpdateOneNoticeDAO): Promise<NoticeEntity> {
    const updateDao = {
      title: dao.title,
      description: dao.description,
      notifyFrom: dao.notifyFrom,
      notifyUntil: dao.notifyUntil,
      coverImageUrl: dao.coverImageUrl,
      id: undefined,
      updatedAt: new Date(),
    };

    const notice = await this.database.notice.update({
      where: {
        id: dao.id,
      },
      data: updateDao,
    });

    return notice as unknown as NoticeEntity;
  }

  async deleteOneById(id: string): Promise<void> {
    await this.database.notice.delete({
      where: {
        id,
      },
    });
  }
}
