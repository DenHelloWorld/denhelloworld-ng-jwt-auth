import { NextFunction, Request, Response } from 'express';

export const register = async (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: 'register' });
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: 'login' });
};

export const me = async (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: 'me func' });
};
