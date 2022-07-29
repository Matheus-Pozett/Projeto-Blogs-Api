import express from 'express';
import productsRoutes from './routes/Products.routes';

const app = express();

app.use(express.json());

app.use('/products', productsRoutes);

export default app;
