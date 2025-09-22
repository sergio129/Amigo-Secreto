import { NextRequest, NextResponse } from 'next/server'
import { ObjectId } from 'mongodb'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import clientPromise from '@/lib/mongodb'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }

    const eventId = params.id
    const client = await clientPromise
    const db = client.db('SaludDirecta')

    // Obtener el evento específico
    const event = await db.collection('amigo_secreto_events').findOne({
      _id: new ObjectId(eventId)
    })

    if (!event) {
      return NextResponse.json({ error: 'Evento no encontrado' }, { status: 404 })
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
    console.error('Error fetching event:', error)
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }

    const eventId = params.id
    const body = await request.json()
    const { name, description, date, isActive } = body

    // Validar campos requeridos
    if (!name || !description || !date) {
      return NextResponse.json({ error: 'Nombre, descripción y fecha son requeridos' }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db('SaludDirecta')

    // Actualizar el evento
    const result = await db.collection('amigo_secreto_events').updateOne(
      { _id: new ObjectId(eventId) },
      { 
        $set: { 
          name, 
          description, 
          date: new Date(date), 
          isActive: isActive ?? true,
          updatedAt: new Date() 
        } 
      }
    )

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: 'Evento no encontrado' }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error updating event:', error)
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }

    const eventId = params.id
    const body = await request.json()
    const { isActive } = body

    const client = await clientPromise
    const db = client.db('SaludDirecta')

    // Actualizar el evento
    const result = await db.collection('amigo_secreto_events').updateOne(
      { _id: new ObjectId(eventId) },
      { $set: { isActive, updatedAt: new Date() } }
    )

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: 'Evento no encontrado' }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error updating event:', error)
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }

    const eventId = params.id
    const client = await clientPromise
    const db = client.db('SaludDirecta')

    // Verificar que el evento existe
    const event = await db.collection('amigo_secreto_events').findOne({
      _id: new ObjectId(eventId)
    })

    if (!event) {
      return NextResponse.json({ error: 'Evento no encontrado' }, { status: 404 })
    }

    // Eliminar participantes asociados al evento
    await db.collection('participants').deleteMany({
      eventId: eventId
    })

    // Eliminar el evento
    const result = await db.collection('amigo_secreto_events').deleteOne({
      _id: new ObjectId(eventId)
    })

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: 'Error al eliminar el evento' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting event:', error)
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}