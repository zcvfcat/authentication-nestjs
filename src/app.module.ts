import { HealthCheckController } from '@health-check/health-check.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [HealthCheckController],
  providers: [],
})
export class AppModule {}
