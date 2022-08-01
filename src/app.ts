import express from 'express';
import orderRoutes from './routes/Orders.routes';
import productsRoutes from './routes/Products.routes';
import userRoutes from './routes/Users.routes';

const app = express();

app.use(express.json());

app.use('/products', productsRoutes);
app.use('/users', userRoutes);
app.use('/orders', orderRoutes);

export default app;
