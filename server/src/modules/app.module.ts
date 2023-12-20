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
import { NoticesModule } from './notices.module';
import { RoleGuard } from '../guards/role.guard';

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
    NoticesModule,
  ],
  providers: [
    { provide: APP_GUARD, useClass: AuthGuard },
    { provide: APP_GUARD, useClass: RoleGuard },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    const limiter = RateLimit({
      windowMs: 1 * 60 * 1000, // 1 min
      max: 15,
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
          }, 2 * 1000); // Atraso de 2 segundos em cada requisição quando atinge o limite de requisições por minuto
        } else {
          next();
        }
      })
      .forRoutes('*');
  }
}
