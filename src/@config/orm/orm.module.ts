import { Global, Module } from '@nestjs/common'
import { PrismaService } from '@config/orm/prisma.service'

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class CustomPrismaModule {}
