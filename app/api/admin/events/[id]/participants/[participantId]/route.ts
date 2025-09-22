import { NextRequest, NextResponse } from 'next/server'
import { ObjectId } from 'mongodb'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import clientPromise from '@/lib/mongodb'

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string, participantId: string } }
) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }

    const eventId = params.id
    const participantId = params.participantId
    const body = await request.json()
    const { name, email } = body

    // Validar campos requeridos
    if (!name) {
      return NextResponse.json({ error: 'El nombre es requerido' }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db('SaludDirecta')

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
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }

    const eventId = params.id
    const participantId = params.participantId

    const client = await clientPromise
    const db = client.db('SaludDirecta')

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