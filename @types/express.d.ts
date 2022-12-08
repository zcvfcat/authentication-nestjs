declare namespace Express {
  export interface Request {
    cookies: Record<string, string>
    user: any
  }
}
