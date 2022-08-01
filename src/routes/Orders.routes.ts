import { Router } from 'express';
import OrderController from '../controllers/Orders.controller';

const orderRoutes = Router();

const orderController = new OrderController();

orderRoutes.get('/', orderController.getAll);

export default orderRoutes;