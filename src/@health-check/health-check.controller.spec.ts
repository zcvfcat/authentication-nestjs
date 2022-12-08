import { Test, TestingModule } from '@nestjs/testing'
import { HealthCheckController } from '@health-check/health-check.controller'

describe('HealthCheckController', () => {
  let healthCheckController: HealthCheckController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HealthCheckController],
    }).compile()

    healthCheckController = app.get<HealthCheckController>(
      HealthCheckController,
    )
  })

  describe('healthCheck', () => {
    it('healthCheck', () => {
      expect(healthCheckController.healthCheck()).toBe('OK')
    })
  })
})
