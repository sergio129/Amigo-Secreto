const { MongoClient } = require('mongodb')
const { ObjectId } = require('mongodb')

async function seedDatabase() {
  const uri = 'mongodb+srv://SaludDirecta:2dK1EIjye943WsZ7@saluddirecta.9fqxyrb.mongodb.net/?retryWrites=true&w=majority&appName=SaludDirecta'

  const client = new MongoClient(uri)

  try {
    await client.connect()
    const db = client.db('SaludDirecta')

    // Crear evento de prueba
    const eventResult = await db.collection('amigo_secreto_events').insertOne({
      name: 'Amigo Secreto 2025',
      description: '¡Feliz Navidad! Descubre a quién debes regalar este año.',
      date: new Date('2025-12-25'),
      isActive: true,
      createdAt: new Date(),
      createdBy: 'admin'
    })

    const eventId = eventResult.insertedId.toString()
    console.log('✅ Evento creado:', eventId)

    // Participantes de prueba
    const participants = [
      'Sergio Anaya',
      'Sandy Gonzalez',
      'Paola Gonzalez',
      'Sharlin Llanos',
      'Dominga Mejia',
      'Jose David Novio de Paola',
      'María Elena',
      'Yair Hernandez',
      'Ivan Ramos',
      'Milena Ibarra'
    ]

    const participantDocs = participants.map(name => ({
      eventId,
      name,
      email: `${name.toLowerCase().replace(/\s+/g, '.')}@example.com`,
      createdAt: new Date()
    }))

    await db.collection('participants').insertMany(participantDocs)
    console.log(`✅ ${participants.length} participantes agregados al evento`)

    console.log('🎄 Base de datos poblada exitosamente!')
    console.log('📧 Admin: sanayaromero62@gmail.com / admin123')
    console.log('🌐 Admin panel: http://localhost:3000/admin/login')
    console.log('🎁 Public page: http://localhost:3000')

  } catch (error) {
    console.error('❌ Error:', error)
  } finally {
    await client.close()
  }
}

seedDatabase()