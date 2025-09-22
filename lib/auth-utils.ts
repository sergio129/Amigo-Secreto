import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { NextResponse } from 'next/server'

export async function getUserFromSession() {
  const session = await getServerSession(authOptions)
  if (!session?.user) return null

  return session.user
}

export function requireAuth(user: any): NextResponse | null {
  if (!user) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
  }
  return null
}

export function requireAdmin(user: any): NextResponse | null {
  const authError = requireAuth(user)
  if (authError) return authError

  if (user.role !== 'admin') {
    return NextResponse.json({ error: 'Acceso denegado. Se requiere rol de administrador' }, { status: 403 })
  }
  return null
}

export function requireOwnershipOrAdmin(user: any, ownerEmail: string): NextResponse | null {
  const authError = requireAuth(user)
  if (authError) return authError

  if (user.role !== 'admin' && user.email !== ownerEmail) {
    return NextResponse.json({ error: 'Acceso denegado. Solo puedes acceder a tus propios eventos' }, { status: 403 })
  }
  return null
}