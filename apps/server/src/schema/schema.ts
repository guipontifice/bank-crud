import { GraphQLSchema } from 'graphql';
import { QueryType } from './QueryType'
import { MutationType } from './MutationType'
import { SubscriptionType } from './SubscriptionType'
import '../modules/message/MessageLoader';

export const schema = new GraphQLSchema({
	query: QueryType,
	mutation: MutationType,
	subscription: SubscriptionType
});