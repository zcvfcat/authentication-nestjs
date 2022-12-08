import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'
import { UserModule } from 'user/user.module'
import { AuthService } from '@auth/auth.service'
import { LocalStrategy } from '@auth/strategies/local.strategy'
import { JwtModule } from '@nestjs/jwt'
import { jwtConstants } from '@auth/constants'

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),],
  providers: [AuthService, LocalStrategy],
  exports: [AuthService]
})
export class AuthModule { }
