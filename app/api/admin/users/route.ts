import { NextRequest, NextResponse } from 'next/server'
import { getUserFromSession, requireAdmin } from '@/lib/auth-utils'
import clientPromise from '@/lib/mongodb'

export async function GET() {
  try {
    const user = await getUserFromSession()
    const authError = requireAdmin(user)
    if (authError) return authError

    const client = await clientPromise
    const db = client.db('SaludDirecta')

    // Obtener todos los usuarios
    const users = await db.collection('amigo_secreto_users').find({}).toArray()

    // Formatear respuesta sin incluir contraseñas
    const formattedUsers = users.map(u => ({
      _id: u._id.toString(),
      email: u.email,
      name: u.name,
      role: u.role,
      maxEvents: u.maxEvents || 1,
      createdAt: u.createdAt,
      updatedAt: u.updatedAt
    }))

    return NextResponse.json(formattedUsers)
  } catch (error) {
    console.error('Error fetching users:', error)
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const user = await getUserFromSession()
    const authError = requireAdmin(user)
    if (authError) return authError

    const body = await request.json()
    const { userId, maxEvents, role } = body

    if (!userId) {
      return NextResponse.json({ error: 'userId es requerido' }, { status: 400 })
    }

    // Validar que no se pueda cambiar el rol del admin actual
    if (userId === user!.id && role && role !== 'admin') {
      return NextResponse.json({ error: 'No puedes cambiar tu propio rol de administrador' }, { status: 400 })
    }

    const updateData: any = { updatedAt: new Date() }

    if (maxEvents !== undefined) {
      if (maxEvents < 1) {
        return NextResponse.json({ error: 'maxEvents debe ser al menos 1' }, { status: 400 })
      }
      updateData.maxEvents = maxEvents
    }

    if (role !== undefined) {
      if (!['admin', 'guest'].includes(role)) {
        return NextResponse.json({ error: 'Rol inválido. Debe ser "admin" o "guest"' }, { status: 400 })
      }
      updateData.role = role
      // Si se cambia a guest, establecer un límite por defecto si no tiene uno
      if (role === 'guest' && maxEvents === undefined) {
        updateData.maxEvents = 5
      }
    }

    if (Object.keys(updateData).length === 1) { // Solo updatedAt
      return NextResponse.json({ error: 'Debe proporcionar al menos un campo para actualizar' }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db('SaludDirecta')

    // Actualizar el usuario
    const result = await db.collection('amigo_secreto_users').updateOne(
      { _id: new (await import('mongodb')).ObjectId(userId) },
      { $set: updateData }
    )

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error updating user:', error)
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}