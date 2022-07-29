import { Router } from 'express';
import UserController from '../controllers/Users.controller';

const userRoutes = Router();

const userController = new UserController();

userRoutes.post('/', userController.create);

export default userRoutes;