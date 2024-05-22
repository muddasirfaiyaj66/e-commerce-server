import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();

router.post('/', ProductController.createProduct);
router.get('/', ProductController.getProducts);
router.get('/:productId', ProductController.getSingleProduct);
router.put('/:productId', ProductController.updateProduct);
router.delete('/:productId', ProductController.deleteSingleProduct);

export const ProductRoutes = router;
