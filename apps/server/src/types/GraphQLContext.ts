export type GraphQLContext = {
  user?: {
    id: string
    name: string
    email?: string;
  }
}