import { TOrder } from './order.interface';
import { Order } from './order.model';

const createOrderIntoDb = async (orderData: TOrder) => {
  const result = await Order.create(orderData);
  return result;
};

const getOrdersFromDb = async () => {
  const result = await Order.find();
  return result;
};
export const OrderServices = {
  createOrderIntoDb,
  getOrdersFromDb,
};
