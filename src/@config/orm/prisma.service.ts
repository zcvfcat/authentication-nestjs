import { Injectable, OnModuleInit, OnModuleDestroy, INestApplication } from '@nestjs/common'
import { PrismaClient, Prisma } from '@prisma/client'

@Injectable()
export class PrismaService extends PrismaClient<Prisma.PrismaClientOptions, 'query' | 'info' | 'warn' | 'error'> implements OnModuleInit, OnModuleDestroy {
  constructor() {
    super({ log: [{ emit: 'event', level: 'query' }], errorFormat: 'pretty' })
  }

  async onModuleInit() {
    await this.$connect()
    this.$on('query', ({ query, params }: Prisma.QueryEvent) => {
      params = JSON.parse(params)
      const replacedQuery = query.replace(/\$([0-9]+)/g, (_, index) => `'${params[index - 1]}'`)
      console.log(replacedQuery)
    })
  }

  async onModuleDestroy() {
    await this.$disconnect()
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close()
    })
  }
}
