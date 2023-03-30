import mongoose, { model, Schema } from "mongoose";

const transactionSchema = new Schema({

    price: { type: Number, required: true },
    name: { type: String, required: true },
    datetime: { type: Date, required: true },
    description: { type: String, required: true }

}); 

export const transactionModel = model('Transaction', transactionSchema);