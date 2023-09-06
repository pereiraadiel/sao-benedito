import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './modules/app.module';
import { AppConstants } from './constants/app.constant';
import { LoggerUtil } from './utils/logger.util';
import { ExceptionHandler } from './handlers/exception.handler';
const logger = new LoggerUtil();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new ExceptionHandler());
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  await app.listen(AppConstants.port, async () => {
    logger.info(`server is running on: ${await app.getUrl()}`);
  });
}
bootstrap();
