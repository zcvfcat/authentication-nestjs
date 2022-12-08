import { AuthModule } from '@auth/auth.module'
import { HealthCheckController } from '@health-check/health-check.controller'
import { Test, TestingModule } from '@nestjs/testing'
import { UserModule } from 'user/user.module'
import { AppController } from './app.controller'

describe('AppController', () => {
  let controller: HealthCheckController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        AuthModule,
        UserModule,
      ],
      controllers: [HealthCheckController, AppController],
      providers: [],
    }).compile()

    controller = module.get<HealthCheckController>(HealthCheckController)
  })

  describe('app service', () => {
    it('health-check is OK?', () => {
      expect(controller.healthCheck()).toBe('OK');
    });
  });
})
