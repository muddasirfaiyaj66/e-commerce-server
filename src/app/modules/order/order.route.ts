import express from 'express';
import { OrderCOntroller } from './order.controller';

const router = express.Router();

router.post('/', OrderCOntroller.createOrder);

export const OrderRoutes = router;
