import { GraphQLSchema } from 'graphql';
import { createSchema } from 'graphql-yoga'
import { QueryType } from './QueryType'
import { MutationType } from './MutationType'
import { SubscriptionType } from './SubscriptionType'

export const schema = createSchema({
	query: QueryType,
	mutation: MutationType,
	subscription: SubscriptionType,



	resolvers: {
		Query: {
			hello: () => 'Hello Woovi 🚀'
		},
		Mutation: {
			createAccount: async (_: any, { name }: { name: string }) => {
				const { Account } = await import('../models/Account')
				const account = new Account({ name })
				await account.save()
				return account
			},
			createTransaction: async (_: any, { from, to, amount }: any) => {
				const { Transaction } = await import('../models/Transaction')
				const tx = new Transaction({ from, to, amount })
				await tx.save()
				return tx
			},
		}
	}


});