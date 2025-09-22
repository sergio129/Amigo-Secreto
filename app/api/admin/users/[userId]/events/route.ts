import { NextRequest, NextResponse } from 'next/server'
import { ObjectId } from 'mongodb'
import { getUserFromSession, requireAdmin } from '@/lib/auth-utils'
import clientPromise from '@/lib/mongodb'

export async function GET(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  try {
    const user = await getUserFromSession()
    const authError = requireAdmin(user)
    if (authError) return authError

    const { userId } = params

    const client = await clientPromise
    const db = client.db('SaludDirecta')

    // Obtener el usuario para verificar que existe
    const targetUser = await db.collection('amigo_secreto_users').findOne({
      _id: new ObjectId(userId)
    })

    if (!targetUser) {
      return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 })
    }

    // Obtener eventos creados por este usuario
    const events = await db.collection('amigo_secreto_events').find({
      createdBy: targetUser.email
    }).toArray()

    return NextResponse.json(events)
  } catch (error) {
    console.error('Error fetching user events:', error)
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}