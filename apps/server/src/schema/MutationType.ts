import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';

import { messageMutations } from '../modules/message/mutations/messageMutations';

export const MutationType = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		createAccount: {
			type: GraphQLString,
			args: {
				name: { type: new GraphQLNonNull(GraphQLString)}
			},
			resolve: (_, {name}) => {
				return `Conta criada: ${name}`
			}
		}
	},
});