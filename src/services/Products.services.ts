import connection from '../models/connection';
import ProductModel from '../models/Product.model';
import IProduct from '../Interfaces/Products';

class ProductService {
  public model: ProductModel;
  
  constructor() {
    this.model = new ProductModel(connection);
  }
  
  public create(product: IProduct): Promise<IProduct> {
    return this.model.createProduct(product);
  }
}
  
export default ProductService;