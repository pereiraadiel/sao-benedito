import { CreateOneNoticeDAO } from './../../daos/notices/createOneNotice.dao';
import { NoticeEntity } from '../../entities/notice.entity';
import { UpdateOneNoticeDAO } from '../../daos/notices/updateOneNotice.dao';
import { GetAllNoticesDAO } from '../../daos/notices/getAllNotices.dao';

export const NOTICES_REPOSITORY = 'NOTICES_REPOSITORY';

export interface NoticesRepository {
  createOne(dao: CreateOneNoticeDAO): Promise<NoticeEntity>;
  findOneId(id: string): Promise<NoticeEntity | null>;
  findMany(dao: GetAllNoticesDAO): Promise<NoticeEntity[]>;
  updateOne(dao: UpdateOneNoticeDAO): Promise<NoticeEntity | null>;
  deleteOneById(id: string): Promise<void>;
}
