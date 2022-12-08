import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UserService } from 'user/user.service'
import { User } from 'user/entities/user.entity'

const isUser = (user: User | undefined, pass: string) => user && user.password === pass

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) { }

  async validateUser(username: string, pass: string): Promise<User | undefined> {
    const user = await this.userService.findOne(username)
    if (!isUser(user, pass)) return undefined

    return user
  }

  async sign(user: User) {
    const payload = { username: user.username, sub: user.userId }
    return {
      access_token: this.jwtService.sign(payload),
    }
  }
}
