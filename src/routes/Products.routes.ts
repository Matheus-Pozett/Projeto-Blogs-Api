import { Router } from 'express';
import ProductController from '../controllers/Products.controller';

const productsRoutes = Router();

const productController = new ProductController();

productsRoutes.post('/', productController.create);

export default productsRoutes;