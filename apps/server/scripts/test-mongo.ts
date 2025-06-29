import mongoose from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'

const run = async () => {
  console.log('⏳ Iniciando Mongo em memória...')
  const mongo = await MongoMemoryServer.create()
  const uri = mongo.getUri()
  console.log('✅ Mongo URI:', uri)

  console.log('⏳ Conectando com Mongoose...')
  await mongoose.connect(uri, { dbName: 'woovi-test' })
  console.log('✅ Mongoose conectado com sucesso')

  await mongoose.disconnect()
  await mongo.stop()
  console.log('✅ Tudo finalizado com sucesso')
}

run().catch((err) => {
  console.error('❌ Erro detectado:', err)
})