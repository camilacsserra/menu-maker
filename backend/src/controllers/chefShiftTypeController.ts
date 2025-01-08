import { Request, Response } from 'express';

import { ListChefShiftTypeDto } from '@app/dtos/chefShiftType';
import {
  ListChefShiftTypeService,
  ShowChefShiftTypeService,
  CreateChefShiftTypeService,
  UpdateChefShiftTypeService,
  DeleteChefShiftTypeService,
} from '@app/services/chefShiftType';

export const list = async (req: Request, res: Response) => {
  const { name } = req.query as unknown as ListChefShiftTypeDto;
  const data = await ListChefShiftTypeService({ name });

  res.json(data);
};

export const show = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await ShowChefShiftTypeService(+id);

  res.json(data);
};

export const create = async (req: Request, res: Response) => {
  const { name, createdById } = req.body;
  const data = await CreateChefShiftTypeService({ name, createdById });

  res.json(data);
};

export const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  const data = await UpdateChefShiftTypeService(+id, { name });

  res.json(data);
};

export const destroy = async (req: Request, res: Response) => {
  const { id } = req.params;

  await DeleteChefShiftTypeService(+id);

  res.json({ message: 'deleted' });
};
