import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProductService from '../services/Products.services';

class ProductController {
  constructor(private productService = new ProductService()) { }

  public create = async (req: Request, res: Response) => {
    const product = req.body;
    const created = await this.productService.create(product);
    res.status(StatusCodes.CREATED).json(created);
  };
}

export default ProductController;