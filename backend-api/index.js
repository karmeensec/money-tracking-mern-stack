import express from 'express';
import cors from 'cors';
const app = express();

app.use(cors());
app.use(express.json());   

app.get('/api/test', (req, res) => {

    res.json('Success');

});

app.post('/api/transaction', (req, res) => {

    res.json(req.body);

});

app.listen(5000);