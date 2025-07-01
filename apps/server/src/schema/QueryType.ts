import { GraphQLString, GraphQLObjectType } from 'graphql';

import { messageConnectionField } from '../modules/message/MessageFields';

export const QueryType = new GraphQLObjectType({
	name: 'Query',
	fields: () => ({
		...messageConnectionField('messages'),
	}),
});