import { NextRequest, NextResponse } from 'next/server'
import { ObjectId } from 'mongodb'
import clientPromise from '@/lib/mongodb'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const eventId = params.id

    if (!eventId) {
      return NextResponse.json({ error: 'ID de evento requerido' }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db('SaludDirecta')

    // Obtener el evento específico
    const event = await db.collection('amigo_secreto_events').findOne({
      _id: new ObjectId(eventId)
    })

    if (!event) {
      return NextResponse.json({ error: 'Evento no encontrado' }, { status: 404 })
    }

    // Verificar si el evento está activo
    if (!event.isActive) {
      return NextResponse.json({ error: 'Este evento no está disponible' }, { status: 404 })
    }

    // Obtener participantes del evento
    const participants = await db.collection('participants').find({
      eventId: event._id.toString()
    }).toArray()

    return NextResponse.json({
      _id: event._id.toString(),
      name: event.name,
      description: event.description,
      date: event.date,
      isActive: event.isActive,
      participants: participants.map(p => ({
        _id: p._id.toString(),
        name: p.name,
        email: p.email,
        isRevealed: p.isRevealed || false,
        revealedAt: p.revealedAt
      }))
    })
  } catch (error) {
    console.error('Error fetching event:', error)
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}