import { Pool, ResultSetHeader } from 'mysql2/promise';
import IUser from '../Interfaces/Users';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async createUser(user: IUser): Promise<IUser> {
    const { username, classe, level, password } = user;
    const QUERY = `
    INSERT INTO 
      Trybesmith.Users (username, classe, level, password) 
    VALUES 
      (?, ?, ?, ?);
    `;
    const result = await this.connection
      .execute<ResultSetHeader>(QUERY, [username, classe, level, password]);
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...user };
  }
}