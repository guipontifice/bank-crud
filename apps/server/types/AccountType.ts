import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql'

export const AccountType = new GraphQLObjectType({
    name: 'Account',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        createdAt: { type: GraphQLString },
    })
})