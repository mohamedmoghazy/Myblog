import express from 'express';
import bodyParser from 'body-parser';
import indexRouter from './routes/index.mjs';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/', indexRouter);

app.listen(port, () =>
{
    console.log(`Example app listening at http://localhost:${port}`);
});