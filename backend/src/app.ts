import express, { NextFunction, Request, Response } from 'express';

import 'express-async-errors';
import AppError from './errors/appError';
import router from './routes';
import './bootstrap';
import './database';
import { logger } from './utils/logger';

const app = express();

app.use(express.json());

app.use(router);

app.use(
  async (
    error: Error,
    req: Request,
    res: Response,
    _: NextFunction,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): Promise<any> => {
    logger.error(`[HTTP_500] ${error.message}`);

    if (error instanceof AppError) {
      return res.status(error.status).json({ error: error.message });
    }

    return res.status(500).json({ error: 'Internal Server Error' });
  },
);

export default app;
