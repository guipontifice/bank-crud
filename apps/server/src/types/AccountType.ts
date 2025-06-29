import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLFloat, GraphQLNonNull } from 'graphql'

export const AccountType = new GraphQLObjectType({
    name: 'Account',
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: new GraphQLNonNull(GraphQLString) }, 
        cpf: { type: new GraphQLNonNull(GraphQLString) },
        rg: { type: GraphQLString },
        email: { type: new GraphQLNonNull(GraphQLString) },
        phone: { type: GraphQLString },
        monthlyIncome: { type: GraphQLFloat },
        balance: { type: new GraphQLNonNull(GraphQLFloat) },
        createdAt: { type: new GraphQLNonNull(GraphQLString) },
        updatedAt: { type: new GraphQLNonNull(GraphQLString) },
    })
})