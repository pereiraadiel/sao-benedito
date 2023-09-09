import { PutObjectCommand } from '@aws-sdk/client-s3';
import { StorageContant } from '../constants/storage.constant';
import { UnprocessableException } from '../exceptions/unprocessable.exception';
import { S3Service } from '../services/s3.service';
import { Injectable } from '@nestjs/common';

type Store = {
  isPublic: boolean;
  buffer: Buffer;
  bucket?: string;
  key: string;
};

@Injectable()
export class StorageIntegration {
  private integrationName: 'Storage Integration';

  constructor(private readonly s3Service: S3Service) {}

  async handle({ key, bucket, buffer, isPublic }: Store) {
    try {
      const s3Instance = this.s3Service.getInstance();

      const ACL: 'public-read' | 'private' = isPublic
        ? 'public-read'
        : 'private';

      const uploadedData = await s3Instance.send(
        new PutObjectCommand({
          Key: key,
          Bucket: bucket || StorageContant.bucket,
          Body: buffer,
          ACL,
        }),
      );
      return uploadedData;
    } catch (error) {
      console.warn(error);
      throw new UnprocessableException(
        [
          {
            key,
          },
        ],
        this.integrationName,
      );
    }
  }
}
