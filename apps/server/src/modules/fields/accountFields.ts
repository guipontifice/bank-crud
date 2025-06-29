import { GraphQLFieldConfig, GraphQLResolveInfo } from 'graphql'
import { connectionArgs, ConnectionArguments } from 'graphql-relay'
import { GraphQLContext } from '../../types/GraphQLContext'
// import { GraphQLContext } from '../../types/GraphQLContext' 
import { AccountConnection } from '../../types/AccountConnection'
import { AccountLoader } from '../loader/AccountLoader'


export const accountConnectionField = (key: string): {
    [key: string]: GraphQLFieldConfig<any, GraphQLContext, ConnectionArguments>
} => ({
    [key]: {
        type: AccountConnection.connectionType,
        args: {
            ...connectionArgs,
        },
        resolve: async (
            parent: any,
            args: ConnectionArguments,
            context: GraphQLContext,
            info: GraphQLResolveInfo
        ) => {
            return await AccountLoader.loadAll(context, args)
        },
    },
})
