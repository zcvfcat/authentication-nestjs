import { HealthCheckController } from '@health-check/health-check.controller'
import { Module } from '@nestjs/common'
import { AuthModule } from './@auth/auth.module'
import { UserModule } from './user/user.module'
import { AppController } from './app/app.controller'

@Module({
  imports: [
    AuthModule,
    UserModule,
  ],
  controllers: [HealthCheckController, AppController],
  providers: [],
})
export class AppModule {}
