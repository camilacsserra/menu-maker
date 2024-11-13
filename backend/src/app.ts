import express, { NextFunction, Request, Response } from 'express';

import 'express-async-errors';
import AppError from './errors/appError';
import router from './routes';
import './bootstrap';
import './database';

const app = express();

app.use(express.json());
app.use(router);

app.use(
  async (
    error: Error,
    req: Request,
    res: Response,
    _: NextFunction,
  ): Promise<any> => {
    if (error instanceof AppError) {
      return res.status(error.status).json({ error: error.message });
    }
    return res.status(500).json({ error: 'Internal Server Error' });
  },
);

export default app;
