const { MongoClient } = require('mongodb')
const bcrypt = require('bcryptjs')

async function createAdmin() {
  const uri = 'mongodb+srv://SaludDirecta:2dK1EIjye943WsZ7@saluddirecta.9fqxyrb.mongodb.net/?retryWrites=true&w=majority&appName=SaludDirecta'
  
  const client = new MongoClient(uri)
  
  try {
    await client.connect()
    const db = client.db('SaludDirecta')
    
    // Datos del admin
    const adminEmail = 'sanayaromero62@gmail.com'
    const adminPassword = 'admin123' // Cambia por una contraseña segura
    const adminName = 'Sergio Anaya'
    
    // Hashear password
    const hashedPassword = await bcrypt.hash(adminPassword, 12)
    
    // Verificar si ya existe
    const existingAdmin = await db.collection('amigo_secreto_admins').findOne({
      email: adminEmail
    })
    
    if (existingAdmin) {
      console.log('❌ Admin ya existe:', adminEmail)
      return
    }
    
    // Crear admin
    await db.collection('amigo_secreto_admins').insertOne({
      email: adminEmail,
      password: hashedPassword,
      name: adminName,
      createdAt: new Date()
    })
    
    console.log('✅ Admin creado exitosamente:')
    console.log('📧 Email:', adminEmail)
    console.log('🔐 Password:', adminPassword)
    console.log('👤 Nombre:', adminName)
    
  } catch (error) {
    console.error('❌ Error:', error)
  } finally {
    await client.close()
  }
}

createAdmin()