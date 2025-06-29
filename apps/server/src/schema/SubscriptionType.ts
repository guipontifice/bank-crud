import { GraphQLObjectType, GraphQLString } from 'graphql';

import { messageSubscriptions } from '../modules/message/subscriptions/messageSubscriptions';

export const SubscriptionType = new GraphQLObjectType({
	name: 'Subscription',
	fields: {
		ping: {
			type: GraphQLString,
			subscribe: async function* () {
				while(true) {
					yield {ping: 'pong'}
					await new Promise((r) => setTimeout(r, 1000));
				}
			},
			resolve: (payload) => payload.ping,
		}
	}
});