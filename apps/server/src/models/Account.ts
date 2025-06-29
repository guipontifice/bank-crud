import mongoose, { Schema, Document } from 'mongoose'

export interface IAccount extends Document {
    name: string;
    cpf: String;
    rg: String;
    email: String;
    phone: String;
    monthlyIncome: Number;
    balance: number;
    createdAt: Date;
    updatedAt: Date;
}

const AccountSchema: Schema = new Schema({
    name: { type: String, required: true },
    cpf: { type: String, required: true },
    rg: { type: String },
    email: { type: String, required: true },
    phone: { type: String },
    monthlyIncome: { type: Number },
    createdAt: { type: Date, default: Date.now },
    balance: { type: Number, required: true, default: 0 },
}, {
    timestamps: true 
});

export const Account = mongoose.model<IAccount>('Account', AccountSchema)