import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { PrismaModule } from './infrastructure/prisma/prisma.module';

import { EventsModule } from './modules/events/events.module';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, EventsModule],
})
export class AppModule {}
