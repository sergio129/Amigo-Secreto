import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { getUserFromSession, requireAuth } from '@/lib/auth-utils'
import clientPromise from '@/lib/mongodb'

export async function GET() {
  try {
    const user = await getUserFromSession()
    const authError = requireAuth(user)
    if (authError) return authError

    const client = await clientPromise
    const db = client.db('SaludDirecta')

    let eventsQuery = {}
    if (user!.role === 'guest') {
      // Los usuarios guest solo ven sus propios eventos
      eventsQuery = { createdBy: user!.email }
    }

    const events = await db.collection('amigo_secreto_events').find(eventsQuery).toArray()
    
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
    const user = await getUserFromSession()
    const authError = requireAuth(user)
    if (authError) return authError

    const client = await clientPromise
    const db = client.db('SaludDirecta')

    // Verificar límite de eventos para usuarios guest
    if (user!.role === 'guest') {
      const userEventCount = await db.collection('amigo_secreto_events').countDocuments({
        createdBy: user!.email
      })

      const maxEvents = user!.maxEvents || 1
      if (userEventCount >= maxEvents) {
        return NextResponse.json({
          error: `Has alcanzado el límite máximo de ${maxEvents} evento(s). Contacta con un administrador para aumentar tu límite.`
        }, { status: 403 })
      }
    }

    const body = await request.json()
    const { name, description, date } = body

    if (!name || !description || !date) {
      return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 })
    }

    const newEvent = {
      name,
      description,
      date: new Date(date),
      isActive: true,
      createdAt: new Date(),
      createdBy: user!.email
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