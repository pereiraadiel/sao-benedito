import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from './database.module';
import { HashModule } from './hash.module';
import { UsersModule } from './users.module';
import { RedisModule } from './redis.module';
import { AuthModule } from './auth.module';
import { MailModule } from './mail.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '../guards/auth.guard';
import { AuthInterceptorModule } from './authInterceptor.module';
import { MediasModule } from './medias.module';
import { StorageModule } from './storage.module';
import { CommunitiesModule } from './communities.module';
import { ConfessionsModule } from './confessions.module';

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
    StorageModule,
    AuthInterceptorModule,
    UsersModule,
    MediasModule,
    CommunitiesModule,
    ConfessionsModule,
  ],
  providers: [{ provide: APP_GUARD, useClass: AuthGuard }],
})
export class AppModule {}
