import { Request, Response } from 'express';

import { ListUserDto } from '@app/dtos/user';

import CreateUserService from '../services/user/CreateUserService';
import DeleteUserServices from '../services/user/DeleteUserService';
import ListUserService from '../services/user/ListUserService';
import ShowUserService from '../services/user/ShowUserService';
import UpdateUserService from '../services/user/UpdateUserService';

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

export const destroy = async (req: Request, res: Response) => {
  const { id } = req.params;

  await DeleteUserServices(+id);

  res.json({ message: 'deleted' });
};
