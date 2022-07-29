import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '../services/Users.services';
import tokenJwt from '../helpers/JwtGenerator';

class UserController {
  constructor(private userService = new UserService()) { }
  
  public create = async (req: Request, res: Response) => {
    const { classe, level, password, username } = req.body;
    const token = tokenJwt({ username });
    await this.userService.create({ classe, level, password, username });
    res.status(StatusCodes.CREATED).json({ token });
  };
}

export default UserController;