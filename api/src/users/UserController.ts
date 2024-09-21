/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import UserSchema from './UserSchema';
import bcrypt from 'bcrypt';

export const register = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const user = await UserSchema.findOne({ email });

  if (user) {
    return res.status(400).json({ error: 'User already exist.' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await UserSchema.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      status: true,
      message: 'User created',
      data: { _id: newUser._id, email: newUser.email },
    });
  } catch {
    return res.status(500).json({ error: 'Something went wrong.' });
  }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: 'login' });
};

export const me = async (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: 'me func' });
};
