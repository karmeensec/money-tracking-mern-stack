import mongoose, { model, Schema } from "mongoose";

const transactionSchema = new Schema({

    name: {type: "string", required: true},
    datetime: {type: "date", required: true},
    description: {type: "string", required: true},

}); 

export const transactionModel = model('Transaction', transactionSchema);