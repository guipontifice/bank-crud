import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';

import { messageMutations } from '../modules/message/mutations/messageMutations';
import { createAccount } from './mutations/createAccount';

export const MutationType = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		createAccount,
		...messageMutations
	},
});