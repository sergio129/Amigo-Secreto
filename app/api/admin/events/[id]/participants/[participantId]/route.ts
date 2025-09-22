import { NextRequest, NextResponse } from 'next/server'
import { ObjectId } from 'mongodb'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { getUserFromSession, requireAuth, requireOwnershipOrAdmin } from '@/lib/auth-utils'
import clientPromise from '@/lib/mongodb'

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string, participantId: string } }
) {
  try {
    const user = await getUserFromSession()
    const authError = requireAuth(user)
    if (authError) return authError

    const eventId = params.id
    const participantId = params.participantId
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

    // Validar campos requeridos
    if (!name) {
      return NextResponse.json({ error: 'El nombre es requerido' }, { status: 400 })
    }

    // Verificar que el participante pertenece al evento
    const participant = await db.collection('participants').findOne({
      _id: new ObjectId(participantId),
      eventId: eventId
    })

    if (!participant) {
      return NextResponse.json({ error: 'Participante no encontrado' }, { status: 404 })
    }

    // Actualizar el participante
    const result = await db.collection('participants').updateOne(
      { _id: new ObjectId(participantId) },
      { 
        $set: { 
          name, 
          email: email || null,
          updatedAt: new Date() 
        } 
      }
    )

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: 'Error al actualizar el participante' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error updating participant:', error)
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string, participantId: string } }
) {
  try {
    const user = await getUserFromSession()
    const authError = requireAuth(user)
    if (authError) return authError

    const eventId = params.id
    const participantId = params.participantId
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

    // Verificar que el participante pertenece al evento
    const participant = await db.collection('participants').findOne({
      _id: new ObjectId(participantId),
      eventId: eventId
    })

    if (!participant) {
      return NextResponse.json({ error: 'Participante no encontrado' }, { status: 404 })
    }

    // Eliminar el participante
    const result = await db.collection('participants').deleteOne({
      _id: new ObjectId(participantId)
    })

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: 'Error al eliminar el participante' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting participant:', error)
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}