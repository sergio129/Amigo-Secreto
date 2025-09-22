// Test script to verify admin login functionality
// Run with: node scripts/test-login.js

const bcrypt = require('bcryptjs');
const { MongoClient } = require('mongodb');

async function testLogin() {
  console.log('🧪 Testing admin login functionality...\n');

  const uri = process.env.MONGODB_URI || 'mongodb+srv://SaludDirecta:2dK1EIjye943WsZ7@saluddirecta.9fqxyrb.mongodb.net/?retryWrites=true&w=majority&appName=SaludDirecta';

  try {
    const client = new MongoClient(uri);
    await client.connect();

    const db = client.db('SaludDirecta');

    // Check if admin exists
    const admin = await db.collection('amigo_secreto_admins').findOne({
      email: 'sanayaromero62@gmail.com'
    });

    if (!admin) {
      console.log('❌ Admin user not found!');
      return;
    }

    console.log('✅ Admin user found:', admin.email);

    // Test password verification
    const isValidPassword = await bcrypt.compare('admin123', admin.password);

    if (isValidPassword) {
      console.log('✅ Password verification successful');
    } else {
      console.log('❌ Password verification failed');
    }

    // Check collections exist
    const collections = await db.listCollections().toArray();
    const collectionNames = collections.map(c => c.name);

    const requiredCollections = ['amigo_secreto_admins', 'amigo_secreto_events', 'participants', 'assignments'];

    console.log('\n📋 Checking collections:');
    requiredCollections.forEach(collection => {
      if (collectionNames.includes(collection)) {
        console.log(`✅ ${collection} exists`);
      } else {
        console.log(`❌ ${collection} missing`);
      }
    });

    await client.close();
    console.log('\n🎉 Login test completed!');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

testLogin();