import DataLoader from 'dataloader';
import { IMessage } from '../modules/message/MessageModel';

export type GraphQLContext = {
  dataloaders: {
    MessageLoader: DataLoader<string, IMessage>;
  };
};