import cors from 'cors'
import express from 'express';
import bodyParser from 'body-parser';
import jobgpt from './routes/jobgpt.js';

const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors())

app.use('/jobgpt', jobgpt);

app.listen(port, () => {
  console.log(`JobGPT Online!\nPort: ${port}`);
});

