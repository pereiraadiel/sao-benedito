import { Injectable } from '@nestjs/common';
import { StorageIntegration } from '../../integrations/storage.integration';
import { Usecase } from '../usecase';
import { StorageContant } from '../../constants/storage.constant';

@Injectable()
export class UploadMediaFileUsecase extends Usecase {
  protected usecaseName = 'Upload Media File Usecase';

  constructor(private readonly storageIntegration: StorageIntegration) {
    super();
  }

  async handle(file: Express.Multer.File, type: 'video' | 'image') {
    try {
      await this.storageIntegration.handle({
        buffer: file.buffer,
        isPublic: true,
        key: file.originalname,
      });

      // armazenar no banco de dados
      type.length;

      return {
        url: `${StorageContant.bucket}/${file.originalname}`,
      };
    } catch (error) {
      this.exceptionHandler(error, [
        {
          file: file.originalname,
        },
      ]);
    }
  }
}
