import express, { Application } from 'express';
import cors from 'cors';
import { ProductRoutes } from './app/modules/product/product.route';
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

//application routes

app.use('/api/products', ProductRoutes);
app.get('/', (req, res) => {
  res.send('Hello, From E-commerce Server!');
});

export default app;
