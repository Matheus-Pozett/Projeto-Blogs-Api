import { Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import IProduct from '../Interfaces/Products';

export default class ProductModel {
  public connection: Pool;
  
  constructor(connection: Pool) {
    this.connection = connection;
  }
  
  public async getAll(): Promise<IProduct[]> {
    const QUERY = 'SELECT * FROM Trybesmith.Products';
    const [result] = await this.connection.execute<RowDataPacket[]>(QUERY);
  
    return result as IProduct[];
  }

  public async createProduct(product: IProduct): Promise<IProduct> {
    const { name, amount } = product;
    const QUERY = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
    const result = await this.connection.execute<ResultSetHeader>(QUERY, [name, amount]);
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...product };
  }
}