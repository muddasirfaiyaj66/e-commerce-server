import express, { Application } from 'express';
import cors from 'cors';
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

//application routes

app.get('/', (req, res) => {
  res.send('Hello From E-commerce Server!');
});

export default app;
