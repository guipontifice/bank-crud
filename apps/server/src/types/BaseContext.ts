import DataLoader from 'dataloader'

export type BaseContext<LoaderName extends string, Value> = {
    dataloaders: Record<LoaderName, DataLoader<string, Value>>;
};