import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import clientPromise from '@/lib/mongodb'

export interface User {
  _id: string
  email: string
  name: string
  role: 'admin' | 'guest'
  maxEvents?: number // Solo para usuarios guest
  createdAt: Date
  updatedAt?: Date
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        try {
          const client = await clientPromise
          const db = client.db('SaludDirecta')

          // Buscar solo en la tabla amigo_secreto_users
          const user = await db.collection('amigo_secreto_users').findOne({
            email: credentials.email
          })

          if (!user) {
            console.log(`Usuario no encontrado: ${credentials.email}`)
            return null
          }

          const isPasswordValid = await bcrypt.compare(credentials.password, user.password)

          if (!isPasswordValid) {
            console.log(`Contraseña inválida para: ${credentials.email}`)
            return null
          }

          console.log(`Login exitoso para: ${credentials.email} (rol: ${user.role})`)

          return {
            id: user._id.toString(),
            email: user.email,
            name: user.name,
            role: user.role,
            maxEvents: user.maxEvents
          }
        } catch (error) {
          console.error('Error durante la autenticación:', error)
          return null
        }
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/admin/login'
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.role = (user as any).role
        token.maxEvents = (user as any).maxEvents
      }
      return token
    },
    async session({ session, token }) {
      if (token && session.user) {
        (session.user as any).id = token.id as string
        (session.user as any).role = token.role as string
        (session.user as any).maxEvents = token.maxEvents as number
      }
      return session
    }
  }
}