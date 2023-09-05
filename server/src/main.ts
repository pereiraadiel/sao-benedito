import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { AppConstants } from './constants/app.constant';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(AppConstants.port, async () => {
    console.warn(
      '\n\x1b[36m%s\x1b[0m',
      `============ ${
        AppConstants.name
      } ============\nserver is running on: ${await app.getUrl()}`,
    );
  });
}
bootstrap();
