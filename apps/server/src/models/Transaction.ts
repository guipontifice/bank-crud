import mongoose, { Schema, Document } from 'mongoose'
import { IAccount } from './Account'

export interface ITransaction extends Document {
    from: IAccount['_id']
    to: IAccount['_id']
    amount: number
    createdAt: Date
}

const TransactionSchema: Schema = new Schema(
    {
        from: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
        to: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
        amount: { type: Number, required: true },
    },
    { timestamps: true }
)

export const Transaction = mongoose.model<ITransaction>('Transaction', TransactionSchema)