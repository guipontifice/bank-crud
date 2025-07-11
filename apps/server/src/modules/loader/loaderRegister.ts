import { MessageLoader } from '../message/MessageLoader';

const loaders: Record<string, () => unknown> = {};

const registerLoader = (key: string, getLoader: () => unknown) => {
  loaders[key] = getLoader;
};

// Registra corretamente
registerLoader('MessageLoader', () => MessageLoader.getLoader());

const getDataloaders = (): Record<string, () => unknown> =>
  Object.keys(loaders).reduce(
    (prev, loaderKey) => ({
      ...prev,
      [loaderKey]: loaders[loaderKey](),
    }),
    {}
  );

export { registerLoader, getDataloaders };