import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
/*
In this service, we have extended the PrismaClient and implemented the OnModuleInit lifecycle hook. The onModuleInit method is called by Nest.js after the module is fully initialized, where we are calling the connect method of the PrismaClient. We have also created a new method enableShutdownHooks which will handle the disconnection and destruction of the service when the application is closed. By using this PrismaService, we can now easily connect to the database and use the PrismaClient throughout our application.
*/
