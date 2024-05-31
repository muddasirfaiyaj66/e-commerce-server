import { Request, Response } from 'express';
import orderValidationSchema from './order.validation';
import { OrderServices } from './order.service';

const createOrder = async (req: Request, res: Response) => {
  try {
    const { orders: orderData } = req.body;
    const zodParseData = orderValidationSchema.parse(orderData);
    const result = await OrderServices.createOrderIntoDb(zodParseData);

    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({
        success: false,
        message: error.message || 'Something went wrong',
        data: error,
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'An unknown error occurred',
      });
    }
  }
};

const getOrders = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string;
    let result;

    if (email) {
      result = await OrderServices.getOrdersFromDbByEmail(email);
      res.status(200).json({
        success: true,
        message: 'Orders fetched successfully for user email!',
        data: result,
      });
    } else {
      result = await OrderServices.getOrdersFromDb();
      res.status(200).json({
        success: true,
        message: 'Orders fetched successfully!',
        data: result,
      });
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({
        success: false,
        message: error.message || 'Something went wrong',
        data: error,
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'An unknown error occurred',
      });
    }
  }
};

export const OrderCOntroller = {
  createOrder,
  getOrders,
};
