import { NextResponse } from 'next/server'
import db from '@/lib/db'
import { ObjectId } from 'mongodb'

export async function PATCH(request: Request, { params }: { params: { id: string, participantId: string } }) {
  const { id: eventId, participantId } = params

  try {
    console.log('Reactivating participant:', { eventId, participantId })

    const result = await db.collection('participants').updateOne(
      { _id: new ObjectId(participantId), eventId },
      { $set: { isRevealed: false, revealedAt: null } }
    )

    if (result.matchedCount === 0) {
      console.error('No matching participant found:', { eventId, participantId })
      return NextResponse.json({ error: 'No matching participant found' }, { status: 404 })
    }

    return NextResponse.json({ message: 'Participante reactivado correctamente' })
  } catch (error) {
    console.error('Error reactivating participant:', error)
    return NextResponse.json({ error: 'Error al reactivar participante' }, { status: 500 })
  }
}