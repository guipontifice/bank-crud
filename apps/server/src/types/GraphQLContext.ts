import { ConnectionArguments } from 'graphql-relay'; // Keep if you use it
import { IMessage } from '../modules/message/MessageModel'; // Adjust path if needed

// Import the MessageLoader value for typeof
import { MessageLoader as MessageLoaderValue } from '../modules/message/MessageLoader';

// Assuming DataLoader comes from 'dataloader' library
import DataLoader from 'dataloader'; // You likely have this installed as a dependency

// Define the shape of your 'loaders' object within the context
interface Loaders {
  MessageLoader: typeof MessageLoaderValue;
  // Add other loaders here if you have them
}

interface DataLoaders {
  MessageLoader: DataLoader<string, IMessage, string>;
}


export interface GraphQLContext {
  loaders: Loaders;
  dataloaders: DataLoaders;
}