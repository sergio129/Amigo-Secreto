import NextAuth from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      email: string
      name?: string
      role: 'admin' | 'guest'
      maxEvents?: number
    }
  }

  interface User {
    id: string
    email: string
    name?: string
    role: 'admin' | 'guest'
    maxEvents?: number
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string
    role: 'admin' | 'guest'
    maxEvents?: number
  }
}