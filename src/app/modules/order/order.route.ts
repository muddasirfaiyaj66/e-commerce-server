import express from 'express';
import { OrderCOntroller } from './order.controller';

const router = express.Router();

router.post('/', OrderCOntroller.createOrder);
router.get('/', OrderCOntroller.getOrders);

export const OrderRoutes = router;
