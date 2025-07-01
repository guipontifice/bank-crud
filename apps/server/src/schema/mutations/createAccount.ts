import { AccountType } from '../../types/AccountType'
import { Account } from "../../models/Account"
import { GraphQLNonNull, GraphQLString, GraphQLFloat, GraphQLInputObjectType } from 'graphql'

export const CreateAccountInputType = new GraphQLInputObjectType({
    name: 'CreateAccountInput',
    fields: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        cpf: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        rg: { type: GraphQLString }, // RG é opcional no seu modelo
        phone: { type: GraphQLString }, // Phone é opcional no seu modelo
        monthlyIncome: { type: GraphQLFloat }, // monthlyIncome é opcional no seu modelo
        initialBalance: { type: GraphQLFloat, defaultValue: 0 }, // Opcional, para um saldo inicial específico
    },
});

export const createAccount = {
    type: AccountType,
    args: {
        input: { type: new GraphQLNonNull(CreateAccountInputType) }
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
