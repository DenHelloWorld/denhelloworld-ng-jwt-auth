import { verify } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import config from '../config/config';

export interface AuthRequest extends Request {
  userId: string;
}

const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Authorization token is required.' });
  }

  try {
    const parsedToken = token.split(' ')[1];
    const decoded = verify(parsedToken, config.jwtSecret as string);
    const _request = req as AuthRequest;
    _request.userId = decoded.sub as string;

    return next();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized.' });
  }
};

export default authenticate;
