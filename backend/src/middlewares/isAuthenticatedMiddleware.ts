import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import AppError from '@app/errors/appError';

export const isAuthenticatedMiddleware = async (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    throw new AppError('TOKEN_IS_MISSING', 401);
  }
  const secretKey = process.env.SECRET_KEY;

  if (!secretKey) {
    throw new AppError('SECRET_KEY_IS_REQUIRED', 401);
  }
  try {
    jwt.verify(token, secretKey);

    next();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    throw new AppError('TOKEN_IS_INVALID_OR_IS_EXPIRED', 403);
  }
};
