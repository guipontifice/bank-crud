import { GraphQLID, GraphQLNonNull, GraphQLFloat } from 'graphql'
import { TransactionType } from '../../../types/TransactionType'
import { Transaction } from '../../models/Transaction'


export const createTransaction = {
    type: TransactionType,
    args: {
        from: { type: new GraphQLNonNull(GraphQLID)},
        to: { type: new GraphQLNonNull(GraphQLID)},
        amount: { type: new GraphQLNonNull(GraphQLFloat)},
    },
    resolve: async (_: any, { from, to, amount} : any) => {
        const transaction = new Transaction({ from, to, amount})
        await transaction.save()
        return transaction
    }
}