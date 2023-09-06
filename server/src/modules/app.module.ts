import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from './database.module';
import { HashModule } from './hash.module';
import { UsersModule } from './users.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, HashModule, UsersModule],
})
export class AppModule {}
