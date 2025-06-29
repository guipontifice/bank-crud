import { Account } from '../../models/Account'
import { connectionFromArray } from 'graphql-relay'

export const AccountLoader = {
    loadAll: async(_: any, args: any) => {
        const accounts = await Account.find().lean()
        return connectionFromArray(accounts, args)
    }
}