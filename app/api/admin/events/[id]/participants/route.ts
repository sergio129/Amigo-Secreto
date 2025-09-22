import { NextRequest, NextResponse } from 'next/server'
import { ObjectId } from 'mongodb'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { getUserFromSession, requireAuth, requireOwnershipOrAdmin } from '@/lib/auth-utils'
import clientPromise from '@/lib/mongodb'

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getUserFromSession()
    const authError = requireAuth(user)
    if (authError) return authError

    const eventId = params.id
    const client = await clientPromise
    const db = client.db('SaludDirecta')

    // Verificar que el evento existe y obtener su propietario
    const event = await db.collection('amigo_secreto_events').findOne({
      _id: new ObjectId(eventId)
    })

    if (!event) {
      return NextResponse.json({ error: 'Evento no encontrado' }, { status: 404 })
    }

    // Verificar permisos de acceso
    const ownershipError = requireOwnershipOrAdmin(user, event.createdBy)
    if (ownershipError) return ownershipError

    const body = await request.json()
    const { name, email } = body

    if (!name) {
      return NextResponse.json({ error: 'El nombre es requerido' }, { status: 400 })
    }

    // Verificar que no exista un participante con el mismo nombre en este evento
    const existingParticipant = await db.collection('participants').findOne({
      eventId: eventId,
      name: name
    })

    if (existingParticipant) {
      return NextResponse.json({ error: 'Ya existe un participante con este nombre en el evento' }, { status: 400 })
    }

    // Crear el participante
    const newParticipant = {
      eventId,
      name,
      email: email || null,
      isRevealed: false,
      revealedAt: null,
      createdAt: new Date()
    }

    const result = await db.collection('participants').insertOne(newParticipant)

    return NextResponse.json({
      _id: result.insertedId.toString(),
      ...newParticipant
    })
  } catch (error) {
    console.error('Error creating participant:', error)
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}