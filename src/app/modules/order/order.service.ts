import { Product } from '../product/product.model';
import { TOrder } from './order.interface';
import { Order } from './order.model';

const createOrderIntoDb = async (orderData: TOrder) => {
  const product = await Product.findById(orderData.productId);

  if (!product) {
    throw new Error('Product not found');
  }

  if (product.inventory.quantity < orderData.quantity) {
    throw new Error('Insufficient quantity available in inventory');
  }

  product.inventory.quantity -= orderData.quantity;
  product.inventory.inStock = product.inventory.quantity > 0;

  await product.save();

  const result = await Order.create(orderData);
  return result;
};

const getOrdersFromDb = async () => {
  const result = await Order.find();
  return result;
};

const getOrdersFromDbByEmail = async (email: string) => {
  const result = await Order.find({ email });
  return result;
};
export const OrderServices = {
  createOrderIntoDb,
  getOrdersFromDb,
  getOrdersFromDbByEmail,
};
