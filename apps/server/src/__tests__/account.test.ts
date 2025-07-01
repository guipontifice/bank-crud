import request from 'supertest'
import mongoose from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'
import { app } from '../server/app'

let mongo: MongoMemoryServer

beforeAll(async () => {
  mongo = await MongoMemoryServer.create()
  const uri = mongo.getUri()
  await mongoose.connect(uri, { dbName: 'test-woovi' })
}, 20000)

afterAll(async () => {
  await mongoose.disconnect()
  if (mongo) {
    await mongo.stop()
  }
})

describe('Account Mutation', () => {
  const mutation = `
      mutation CreateAccount($input: CreateAccountInput) { 
        createAccount(input: $input) { 
          id
          name      
          cpf
          email
          monthlyIncome
          balance
        }
      }
    `;

  const variables = {
    input: {
      name: "Guilherme",
      cpf: "12345678900",
      email: "guilherme@email.com",
      rg: "987654321",
      phone: "5511999999999",
      monthlyIncome: 7000.0,
      initialBalance: 0.0
    }
  };

  it('should create an account', async () => { 
    const response = await request(app.callback())
      .post('/graphql')
      .send({ query: mutation, variables: variables });

    console.log(JSON.stringify(response.body, null, 2));

    expect(response.status).toBe(200);
    expect(response.body.data.createAccount.name).toBe('Guilherme');
    expect(response.body.data.createAccount.cpf).toBe('12345678900');
    expect(response.body.data.createAccount.email).toBe('guilherme@email.com');
    expect(response.body.data.createAccount.monthlyIncome).toBe(7000);
    expect(response.body.data.createAccount.balance).toBe(0);
  }, 20000); 
});