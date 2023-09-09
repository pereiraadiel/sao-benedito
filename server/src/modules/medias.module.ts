import { Module } from '@nestjs/common';
import { MediasController } from '../controllers/medias/medias.controller';
import { StorageModule } from './storage.module';
import { UploadMediaFileUsecase } from '../usecases/medias/uploadMediaFile.usecase';

@Module({
  imports: [StorageModule],
  controllers: [MediasController],
  providers: [UploadMediaFileUsecase],
  exports: [],
})
export class MediasModule {}
