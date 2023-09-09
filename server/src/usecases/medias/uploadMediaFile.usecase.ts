import { HashUtil } from './../../utils/hash.util';
import { Inject, Injectable } from '@nestjs/common';
import { StorageIntegration } from '../../integrations/storage.integration';
import { Usecase } from '../usecase';
import {
  MEDIAS_REPOSITORY,
  MediasRepository,
} from '../../repositories/medias/medias.repository';
import { StorageContant } from '../../constants/storage.constant';

@Injectable()
export class UploadMediaFileUsecase extends Usecase {
  protected usecaseName = 'Upload Media File Usecase';

  constructor(
    private readonly storageIntegration: StorageIntegration,
    @Inject(MEDIAS_REPOSITORY)
    private readonly mediasRepository: MediasRepository,
  ) {
    super();
  }

  async handle(file: Express.Multer.File, type: 'video' | 'image') {
    try {
      const date = new Date();
      const fileKey = HashUtil.hash(file.originalname + date.getTime())
        .replaceAll('=', '')
        .concat('-')
        .concat(file.originalname);

      await this.storageIntegration.handle({
        buffer: file.buffer,
        isPublic: true,
        key: fileKey,
      });

      const media = await this.mediasRepository.createOne({
        alternativeText: file.originalname,
        source: `https://${StorageContant.bucket}/${fileKey}`,
        type,
      });

      return media;
    } catch (error) {
      console.error(error);
      this.exceptionHandler(error, [
        {
          file: file.originalname,
        },
      ]);
    }
  }
}
