import express from 'express';
const app = express();

app.get('/api/test', (req, res) => {

    res.json('Success');

});

app.listen(5000);