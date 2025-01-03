import { Request, Response } from 'express';

import { ListUserDto } from '@app/dtos/user';
import AppError from '@app/errors/appError';
import {
  CreateUserService,
  DeleteUserServices,
  ListUserService,
  ShowUserService,
  UpdateUserService,
} from '@app/services/user';

export const list = async (req: Request, res: Response) => {
  const { name, email } = req.query as unknown as ListUserDto;
  const data = await ListUserService({ name, email });

  res.json(data);
};

export const show = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await ShowUserService(+id);

  res.json(data);
};

export const create = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const data = await CreateUserService({ name, email, password });

  res.json(data);
};

export const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const data = await UpdateUserService(+id, { name, email });

  res.json(data);
};

export const destroy = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    await DeleteUserServices(+id);

    res.json({ message: 'deleted' });
  } catch (error) {
    if (error instanceof AppError) {
      res.status(404).json({ error: error.message });
    }
  }
};
