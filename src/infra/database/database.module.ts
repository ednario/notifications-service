import { Module } from '@nestjs/common';
import { NotificationsRepository } from 'src/application/repositories/notification-repository';
import { PrismaService } from './prisma/prisma.service';
import { PrimaNotificationRepository } from './prisma/repositories/prisma-notification-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrimaNotificationRepository,
    },
  ],
  exports: [NotificationsRepository],
})
export class DatabaseModule {}
