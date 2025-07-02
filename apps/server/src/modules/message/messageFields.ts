import { MessageType, MessageConnection } from './MessageType';
import { connectionArgs, ConnectionArguments } from 'graphql-relay';
import { GraphQLContext } from '../../types/GraphQLContext'; // Seu contexto corrigido

export const messageField = (key: string) => ({
    [key]: {
        type: MessageType,
        resolve: async (obj: Record<string, unknown>, _: any, context: GraphQLContext) =>
            context.loaders.MessageLoader.load(context, obj.message as string),
    },
});

export const messageConnectionField = (key: string) => ({
    [key]: {
        type: MessageConnection.connectionType,
        args: {
            ...connectionArgs,
        },
        resolve: async (_: any, args: ConnectionArguments, context: GraphQLContext) => {
            return await context.loaders.MessageLoader.loadAll(context, args);
        },
    },
});