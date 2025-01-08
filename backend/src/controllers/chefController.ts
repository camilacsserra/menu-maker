import { Request, Response } from 'express';

import { ListChefDto } from '@app/dtos/chef';
import {
  CreateChefService,
  DeleteChefService,
  ListChefService,
  ShowChefService,
  UpdateChefService,
} from '@app/services/chef';

export const list = async (req: Request, res: Response) => {
  const { name } = req.query as unknown as ListChefDto;
  const data = await ListChefService({ name });

  res.json(data);
};

export const show = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await ShowChefService(+id);

  res.json(data);
};

export const create = async (req: Request, res: Response) => {
  const { name, createdById } = req.body;
  const data = await CreateChefService({ name, createdById });

  res.json(data);
};

export const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  const data = await UpdateChefService(+id, { name });

  res.json(data);
};

export const destroy = async (req: Request, res: Response) => {
  const { id } = req.params;

  await DeleteChefService(+id);

  res.json({ message: 'deleted' });
};
