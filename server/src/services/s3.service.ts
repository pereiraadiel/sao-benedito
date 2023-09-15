import { S3Client } from '@aws-sdk/client-s3';
import { StorageContant } from '../constants/storage.constant';

export class S3Service {
  private credentials = {
    accessKeyId: StorageContant.access.key,
    secretAccessKey: StorageContant.access.secret,
  };
  private s3Client: S3Client;

  constructor(region: string = 'global') {
    this.s3Client = new S3Client({
      endpoint: StorageContant.endpoint,
      credentials: this.credentials,
      region,
      forcePathStyle: StorageContant.endpoint.includes('localhost'),
      apiVersion: 'v4',
    });
  }

  getInstance() {
    return this.s3Client;
  }
}
