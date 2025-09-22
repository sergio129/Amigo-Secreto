import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import clientPromise from '@/lib/mongodb'

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }

    const client = await clientPromise
    const db = client.db('SaludDirecta')
    
    const events = await db.collection('amigo_secreto_events').find({}).toArray()
    
    // Agregar conteo de participantes a cada evento
    const eventsWithCounts = await Promise.all(
      events.map(async (event) => {
        const participantCount = await db.collection('participants').countDocuments({
          eventId: event._id.toString()
        })
        
        return {
          ...event,
          _id: event._id.toString(),
          participantCount,
          date: event.date ? new Date(event.date).toISOString().split('T')[0] : null
        }
      })
    )

    return NextResponse.json(eventsWithCounts)
  } catch (error) {
    console.error('Error fetching events:', error)
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }

    const body = await request.json()
    const { name, description, date } = body

    if (!name || !description || !date) {
      return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db('SaludDirecta')
    
    const newEvent = {
      name,
      description,
      date: new Date(date),
      isActive: true,
      createdAt: new Date(),
      createdBy: session.user?.email
    }

    const result = await db.collection('amigo_secreto_events').insertOne(newEvent)

    return NextResponse.json({
      _id: result.insertedId.toString(),
      ...newEvent
    })
  } catch (error) {
    console.error('Error creating event:', error)
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}