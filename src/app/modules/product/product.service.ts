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
const updateAProduct = async (id: string, updateData: Partial<TProduct>) => {
  const result = await Product.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  });
  return result;
};
const deleteAProduct = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};
export const ProductServices = {
  createProductIntoDb,
  getProductsFromDb,
  getSingleProductFromDbByID,
  updateAProduct,
  deleteAProduct,
};
