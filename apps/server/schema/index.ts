import { createSchema } from 'graphql-yoga'

console.log('teste')
export const schema = createSchema({
  typeDefs: /* GraphQL */ `
    type Account {
      id: ID!
      name: String!
      createdAt: String!
    }

    type Transaction {
      id: ID!
      from: ID!
      to: ID!
      amount: Float!
      createdAt: String!
    }

    type Query {
      hello: String!
    }

    type Mutation {
      createAccount(name: String!): Account!
      createTransaction(from: ID!, to: ID!, amount: Float!): Transaction!
    }
  `,
  resolvers: {
    Query: {
      hello: () => 'Hello Woovi 🚀'
    },
    Mutation: {
      createAccount: async (_: any, { name }: { name: string }) => {
        const { Account } = await import('../src/models/Account')
        const account = new Account({ name })
        await account.save()
        return account
      },
      createTransaction: async (_: any, { from, to, amount }: any) => {
        const { Transaction } = await import('../src/models/Transaction')
        const tx = new Transaction({ from, to, amount })
        await tx.save()
        return tx
      },
    }
  }
})