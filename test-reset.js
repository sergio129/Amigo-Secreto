const { MongoClient } = require('mongodb');

async function testNewLogic() {
  const client = new MongoClient('mongodb+srv://SaludDirecta:2dK1EIjye943WsZ7@saluddirecta.9fqxyrb.mongodb.net/?retryWrites=true&w=majority&appName=SaludDirecta');
  await client.connect();
  const db = client.db('SaludDirecta');

  const eventId = '68d1a808e37332062f21ac6a';

  console.log('=== BORRANDO ASIGNACIONES EXISTENTES ===');
  const deleteResult = await db.collection('assignments').deleteMany({ eventId });
  console.log('Asignaciones borradas:', deleteResult.deletedCount);

  console.log('\n=== PONIENDO PARTICIPANTES COMO NO REVELADOS ===');
  const updateResult = await db.collection('participants').updateMany(
    { eventId },
    { $set: { isRevealed: false, revealedAt: null } }
  );
  console.log('Participantes actualizados:', updateResult.modifiedCount);

  console.log('\n=== VERIFICANDO ESTADO ===');
  const participants = await db.collection('participants').find({ eventId }).toArray();
  const assignments = await db.collection('assignments').find({ eventId }).toArray();

  console.log('Participantes:', participants.map(p => ({ name: p.name, isRevealed: p.isRevealed })));
  console.log('Asignaciones restantes:', assignments.length);

  await client.close();
}

testNewLogic();