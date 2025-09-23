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

    // Verificar que el evento existe
    const event = await db.collection('amigo_secreto_events').findOne({
      _id: new ObjectId(eventId)
    })

    if (!event) {
      return NextResponse.json({ error: 'Evento no encontrado' }, { status: 404 })
    }

    // Verificar que el evento esté activo
    if (!event.isActive) {
      return NextResponse.json({ error: 'Evento no encontrado' }, { status: 404 })
    }

    // Obtener asignaciones existentes
    const assignments = await db.collection('assignments').find({
      eventId: eventId
    }).toArray()

    // Obtener participantes para mapear IDs a nombres
    const participants = await db.collection('participants').find({
      eventId: eventId
    }).toArray()

    const participantMap = new Map()
    participants.forEach(p => {
      participantMap.set(p._id.toString(), p.name)
    })

    // Convertir asignaciones a formato legible
    const assignmentsMap: Record<string, string> = {}
    assignments.forEach(assignment => {
      const giverName = participantMap.get(assignment.giverId)
      const receiverName = participantMap.get(assignment.receiverId)
      if (giverName && receiverName) {
        assignmentsMap[giverName] = receiverName
      }
    })

    // Obtener estado de revelaciones
    const revealedParticipants = participants
      .filter(p => p.isRevealed)
      .map(p => p.name)

    return NextResponse.json({
      assignments: assignmentsMap,
      revealedParticipants: revealedParticipants,
      totalAssignments: assignments.length
    })
  } catch (error) {
    console.error('Error fetching assignments:', error)
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  return NextResponse.json({
    error: 'Las asignaciones ahora se generan individualmente al revelar'
  }, { status: 400 })
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const eventId = params.id
    const body = await request.json()
    const { participantName } = body

    if (!eventId || !participantName) {
      return NextResponse.json({
        error: 'ID de evento y nombre del participante requeridos'
      }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db('SaludDirecta')

    // Verificar que el evento existe
    const event = await db.collection('amigo_secreto_events').findOne({
      _id: new ObjectId(eventId)
    })

    if (!event) {
      return NextResponse.json({ error: 'Evento no encontrado' }, { status: 404 })
    }

    // Verificar que el evento esté activo
    if (!event.isActive) {
      return NextResponse.json({ error: 'Evento no encontrado' }, { status: 404 })
    }

    // Verificar que el participante existe y no ha revelado
    const participant = await db.collection('participants').findOne({
      eventId: eventId,
      name: participantName
    })

    if (!participant) {
      return NextResponse.json({
        error: 'Participante no encontrado'
      }, { status: 404 })
    }

    if (participant.isRevealed) {
      return NextResponse.json({
        error: 'Participante ya revelado'
      }, { status: 400 })
    }

    // Obtener todos los participantes del evento
    const allParticipants = await db.collection('participants').find({
      eventId: eventId
    }).toArray()

    // Obtener asignaciones existentes para saber quién ya está asignado
    const existingAssignments = await db.collection('assignments').find({
      eventId: eventId
    }).toArray()

    // Verificar si el participante ya tiene una asignación existente (de una revelación anterior)
    const existingAssignment = existingAssignments.find(a => a.giverId === participant._id.toString())
    
    if (existingAssignment) {
      // El participante fue reactivado pero ya tenía asignación, devolver la asignación existente
      const receiver = allParticipants.find(p => p._id.toString() === existingAssignment.receiverId)
      
      if (receiver) {
        // Marcar el participante como revelado nuevamente
        await db.collection('participants').updateOne(
          { _id: participant._id },
          {
            $set: {
              isRevealed: true,
              revealedAt: new Date()
            }
          }
        )

        return NextResponse.json({
          message: 'Asignación existente recuperada',
          assignment: {
            giver: participant.name,
            receiver: receiver.name
          },
          participant: {
            _id: participant._id.toString(),
            name: participant.name,
            isRevealed: true,
            revealedAt: new Date()
          }
        })
      }
    }

    // Si no tiene asignación existente, crear una nueva

    // Crear mapa de participantes asignados
    const assignedReceivers = new Set()
    const assignedGivers = new Set()

    existingAssignments.forEach(assignment => {
      assignedReceivers.add(assignment.receiverId)
      assignedGivers.add(assignment.giverId)
    })

    // Encontrar participantes disponibles (que no son el giver actual y no están ya asignados como receivers)
    const availableParticipants = allParticipants.filter(p =>
      p._id.toString() !== participant._id.toString() && // No puede asignarse a sí mismo
      !assignedReceivers.has(p._id.toString()) // No puede ser receiver si ya lo es
    )

    if (availableParticipants.length === 0) {
      return NextResponse.json({
        error: 'No hay participantes disponibles para asignar'
      }, { status: 400 })
    }

    // Seleccionar un receiver aleatorio de los disponibles
    const randomIndex = Math.floor(Math.random() * availableParticipants.length)
    const selectedReceiver = availableParticipants[randomIndex]

    // Crear la asignación
    const newAssignment = {
      eventId: eventId,
      giverId: participant._id.toString(),
      receiverId: selectedReceiver._id.toString(),
      createdAt: new Date()
    }

    // Guardar la asignación
    await db.collection('assignments').insertOne(newAssignment)

    // Marcar el participante como revelado
    await db.collection('participants').updateOne(
      { _id: participant._id },
      {
        $set: {
          isRevealed: true,
          revealedAt: new Date()
        }
      }
    )

    return NextResponse.json({
      message: 'Asignación generada y participante marcado como revelado',
      assignment: {
        giver: participant.name,
        receiver: selectedReceiver.name
      },
      participant: {
        _id: participant._id.toString(),
        name: participant.name,
        isRevealed: true,
        revealedAt: new Date()
      }
    })
  } catch (error) {
    console.error('Error creating individual assignment:', error)
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}