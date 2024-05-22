import { Request, Response } from 'express';
import productValidationSchema from './product.validtion';
import { ProductServices } from './product.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const { Product: productData } = req.body;
    const zodParseData = productValidationSchema.parse(productData);
    const result = await ProductServices.createProductIntoDb(zodParseData);

    res.status(200).json({
      success: true,
      message: 'Product is created successfully',
      data: result,
    });
  } catch (error: unknown) {
    res.status(500).json({
      success: false,
      message: error.message || 'something Went wrong',
      data: error,
    });
  }
};

export const ProductController = {
  createProduct,
};
