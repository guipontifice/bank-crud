import { AccountType } from '../../types/AccountType'
import { Account } from "../../models/Account"
import { GraphQLNonNull, GraphQLString } from 'graphql'

export const createAccount = {
    type: AccountType,
    args: {
        input: { type: new GraphQLNonNull(AccountType) }
    },
    resolve: async (_: any, { input }: { input: { name: string; cpf: string; email: string; rg?: string; phone?: string; monthlyIncome?: number; initialBalance?: number } }) => {
        const account = new Account({
            name: input.name,
            cpf: input.cpf,
            email: input.email,
            rg: input.rg,
            phone: input.phone,
            monthlyIncome: input.monthlyIncome,
            balance: input.initialBalance || 0
        });
        await account.save()
        return account
    }
}
