import connection from '../models/connection';
import UserModel from '../models/Users.model';
import IUser from '../Interfaces/Users';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public create(user: IUser): Promise<IUser> {
    return this.model.createUser(user);
  }
}

export default UserService;