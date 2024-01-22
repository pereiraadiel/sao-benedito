import { Module } from '@nestjs/common';
import { MediasController } from '../controllers/medias/medias.controller';
import { StorageModule } from './storage.module';
import { UploadMediaFileUsecase } from '../usecases/medias/uploadMediaFile.usecase';
import { MEDIAS_REPOSITORY } from '../repositories/medias/medias.repository';
import { MediasConcreteRepository } from '../repositories/medias/medias.concrete.repository';

@Module({
  imports: [StorageModule],
  controllers: [MediasController],
  providers: [
    UploadMediaFileUsecase,
    {
      provide: MEDIAS_REPOSITORY,
      useClass: MediasConcreteRepository,
    },
  ],
  exports: [],
})
export class MediasModule {}
