import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db('SaludDirecta')

    // Obtener el evento activo más reciente
    const event = await db.collection('amigo_secreto_events').findOne(
      { isActive: true },
      { sort: { createdAt: -1 } }
    )

    if (!event) {
      return NextResponse.json({ error: 'No hay eventos activos' }, { status: 404 })
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
        email: p.email
      }))
    })
  } catch (error) {
    console.error('Error fetching active event:', error)
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}