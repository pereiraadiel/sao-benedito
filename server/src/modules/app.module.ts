import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import RateLimit from 'express-rate-limit';

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
import { SecretaryTimesModule } from './secretaryTimes.module';
import { MassesModule } from './masses.module';
import { EventsModule } from './events.module';
import { NoticesModule } from './notices.module';
import { ProjectsModule } from './projects.module';

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
    MassesModule,
    SecretaryTimesModule,
    EventsModule,
    NoticesModule,
    ProjectsModule,
  ],
  providers: [{ provide: APP_GUARD, useClass: AuthGuard }],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    const limiter = RateLimit({
      windowMs: 10 * 60 * 1000, // 1 min
      max: 10,
      keyGenerator: (req) => {
        return req.ip;
      },
    });

    consumer.apply(limiter).forRoutes('*');

    consumer
      .apply((req: any, res: any, next: any) => {
        if (res.headersSent) {
          return next();
        }

        if (req.rateLimit && req.rateLimit.remaining === 0) {
          setTimeout(() => {
            next();
          }, 2 * 1000); // Atraso de 2 segundo
        } else {
          next();
        }
      })
      .forRoutes('*');
  }
}
