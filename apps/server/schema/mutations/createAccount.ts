import { GraphQLString, GraphQLNonNull } from 'graphql'
import { AccountType } from '../../../types/AccountType'
import { Account } from "../../models/Account"


export const createAccount = {
    type: AccountType,
    args: {
        name: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve: async (_: any, { name }: { name: string }) => {
        const account = new Account({ name })
        await account.save()
        return account
    }
}
