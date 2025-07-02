import { createLoader } from '@entria/graphql-mongo-helpers';
import { registerLoader } from '../loader/loaderRegister';
import { Message, IMessage } from './MessageModel'; // Garanta que IMessage está importado

const actualMessageLoaderObject = createLoader({
    model: Message,
    loaderName: 'MessageLoader',
});

registerLoader('MessageLoader', () => actualMessageLoaderObject.getLoader());

export const MessageLoader = actualMessageLoaderObject;