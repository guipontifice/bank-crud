import { connectionDefinitions } from 'graphql-relay'
import { AccountType } from './AccountType'

export const AccountConnection = connectionDefinitions({
    name: 'Account',
    nodeType: AccountType,
})