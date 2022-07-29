import express from 'express';
import productsRoutes from './routes/Products.routes';
import userRoutes from './routes/Users.routes';

const app = express();

app.use(express.json());

app.use('/products', productsRoutes);
app.use('/users', userRoutes);

export default app;
