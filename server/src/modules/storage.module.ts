import { Global, Module } from '@nestjs/common';
import { StorageIntegration } from '../integrations/storage.integration';
import { S3Service } from '../services/s3.service';

@Global()
@Module({
  providers: [StorageIntegration, S3Service],
  exports: [StorageIntegration],
})
export class StorageModule {}
