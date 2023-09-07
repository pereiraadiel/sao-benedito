import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from './database.module';
import { HashModule } from './hash.module';
import { UsersModule } from './users.module';
import { RedisModule } from './redis.module';
import { AuthModule } from './auth.module';
import { MailModule } from './mail.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    RedisModule,
    HashModule,
    MailModule,
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}
