import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common'
import { LocalAuthGuard } from '@auth/guards/local-auth.guard'
import { AuthService } from '@auth/auth.service'
import { JwtAuthGuard } from '@auth/guards/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) { }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req: Express.Request) {
    return this.authService.sign(req.user)
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req: Express.Request) {
    return req.user;
  }
}
