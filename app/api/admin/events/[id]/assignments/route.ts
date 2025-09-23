import { NextResponse } from 'next/server'
import db from '@/lib/db'

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const eventId = params.id

  try {
    await db.collection('assignments').deleteMany({ eventId })
    return NextResponse.json({ message: 'Asignaciones limpiadas correctamente' })
  } catch (error) {
    console.error('Error clearing assignments:', error)
    return NextResponse.json({ error: 'Error al limpiar asignaciones' }, { status: 500 })
  }
}