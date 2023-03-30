import express from 'express';
import cors from 'cors';
import { transactionModel } from './models/transaction.js';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv'
dotenv.config()

const app = express();

app.use(cors());
app.use(express.json());   

app.get('/api/test', (req, res) => {

    res.json('Success');

});

app.post('/api/transaction', async (req, res) => {

    await mongoose.connect('mongodb+srv://kamilisma:Aaaa1111@cluster0.tv1ehyb.mongodb.net/?retryWrites=true&w=majority');

    const {name, datetime, description} = req.body;

    const transaction = await transactionModel.create({ name, datetime, description})

    res.json(transaction);

});

app.listen(5000);