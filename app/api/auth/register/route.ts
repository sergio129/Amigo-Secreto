import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import clientPromise from '@/lib/mongodb'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, password } = body

    // Validar campos requeridos
    if (!name || !email || !password) {
      return NextResponse.json({ error: 'Todos los campos son requeridos' }, { status: 400 })
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Email inválido' }, { status: 400 })
    }

    // Validar longitud de contraseña
    if (password.length < 6) {
      return NextResponse.json({ error: 'La contraseña debe tener al menos 6 caracteres' }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db('SaludDirecta')

    // Verificar si el email ya existe
    const existingUser = await db.collection('amigo_secreto_users').findOne({
      email: email.toLowerCase()
    })

    if (existingUser) {
      return NextResponse.json({ error: 'El email ya está registrado' }, { status: 400 })
    }

    // Hash de la contraseña
    const hashedPassword = await bcrypt.hash(password, 12)

    // Crear el usuario
    const result = await db.collection('amigo_secreto_users').insertOne({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      password: hashedPassword,
      role: 'guest',
      maxEvents: 5, // Límite por defecto para usuarios invitados
      createdAt: new Date()
    })

    return NextResponse.json({
      success: true,
      userId: result.insertedId
    })

  } catch (error) {
    console.error('Error registering user:', error)
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}