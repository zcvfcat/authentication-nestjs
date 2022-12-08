export class User {
  public userId: number
  public username: string
  public password: string | null

  constructor(userId: number, username: string, password?: string) {
    this.userId = userId
    this.username = username
    this.password = password ?? null
  }
}
