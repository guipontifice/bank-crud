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
        from: { type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true },
        to: { type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true },
        amount: { type: Number, required: true },
        createdAt: { type: Date, default: Date.now },
    },
    { timestamps: true }
)

export const Transaction = mongoose.model<ITransaction>('Transaction', TransactionSchema)