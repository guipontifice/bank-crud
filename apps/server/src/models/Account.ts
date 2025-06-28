import mongoose, { Schema, Document } from 'mongoose'

export interface IAccount extends Document {
    ownerName: string;
    balance: number;
    createdAt: Date;
    updatedAt: Date;
}

const AccountSchema: Schema = new Schema({
    ownerName: { type: String, required: true },
    balance: { type: Number, required: true, default: 0 }, // Usar Number ou Decimal128 (mais preciso para dinheiro)
}, {
    timestamps: true // Adiciona createdAt e updatedAt automaticamente
});

export const Account = mongoose.model<IAccount>('Account', AccountSchema)