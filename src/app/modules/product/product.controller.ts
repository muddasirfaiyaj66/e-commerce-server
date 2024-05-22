import { Request, Response } from 'express';
import { ProductServices } from './product.service';
import productValidationSchema from './product.validtion';

const createProduct = async (req: Request, res: Response): Promise<void> => {
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

const getProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getProductsFromDb();
    res.status(200).json({
      success: true,
      message: 'Products are retrieved successfully',
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

export const ProductController = {
  createProduct,
  getProducts,
};
