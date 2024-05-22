import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProductIntoDb = async (productData: TProduct) => {
  const result = await Product.create(productData);
  return result;
};

const getProductsFromDb = async () => {
  const result = await Product.find();
  return result;
};
const getSingleProductFromDbByID = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};
export const ProductServices = {
  createProductIntoDb,
  getProductsFromDb,
  getSingleProductFromDbByID,
};
