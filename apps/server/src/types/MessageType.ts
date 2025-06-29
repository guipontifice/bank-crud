import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql'

export const MessageType = new GraphQLObjectType({
    name: 'Message',
    fields: () => ({
        id: { type: GraphQLID },
        content: { type: GraphQLString },
        createdAt: { type: GraphQLString },
    }),
})