import { UploadMediaFileUsecase } from './../../usecases/medias/uploadMediaFile.usecase';
import {
  Controller,
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express/multer';

@Controller('/medias')
export class MediasController {
  constructor(
    private readonly uploadMediaFileUsecase: UploadMediaFileUsecase,
  ) {}

  @Post('/images')
  @UseInterceptors(FileInterceptor('file'))
  async uploadMediaImage(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 5 }), // 5 MB
          new FileTypeValidator({ fileType: 'image/*' }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    return await this.uploadMediaFileUsecase.handle(file, 'image');
  }

  @Post('/videos')
  @UseInterceptors(FileInterceptor('file'))
  async uploadMediaVideo(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 100 }), // 100 MB
          new FileTypeValidator({ fileType: 'video/*' }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    return await this.uploadMediaFileUsecase.handle(file, 'video');
  }
}
