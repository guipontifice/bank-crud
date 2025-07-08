import { createLoader } from '@entria/graphql-mongo-helpers';
import { Message, IMessage } from './MessageModel';

const MessageLoader = createLoader({
  model: Message,
  loaderName: 'MessageLoader',
});

export { MessageLoader };