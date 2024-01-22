import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './modules/app.module';
import { AppConstants } from './constants/app.constant';
import { LoggerUtil } from './utils/logger.util';
import { ExceptionHandler } from './handlers/exception.handler';
import { RedisService } from './services/redis.service';
const logger = new LoggerUtil();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new ExceptionHandler());
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  await app.listen(AppConstants.port, async () => {
    logger.info(`server is running on: ${await app.getUrl()}`);
  });

  // Capturar eventos SIGTERM e SIGINT
  process.on('SIGTERM', async () => {
    const redis = app.get(RedisService);
    redis.disconnect();

    await app.close();
    process.exit(0);
  });

  process.on('SIGINT', async () => {
    const redis = app.get(RedisService);
    redis.disconnect();

    await app.close();
    process.exit(0);
  });
}
bootstrap();
