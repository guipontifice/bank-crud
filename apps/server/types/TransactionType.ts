import { GraphQLObjectType, GraphQLFloat, GraphQLID, GraphQLString } from 'graphql'

export const TransactionType = new GraphQLObjectType({
    name: 'Transaction',
    fields: () => ({
        id: { type: GraphQLID },
        from: { type: GraphQLID },
        to: { type: GraphQLID },
        amount: { type: GraphQLFloat },
        createdAt: { type: GraphQLString },
    })
})
