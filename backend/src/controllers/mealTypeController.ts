import { Request, Response } from 'express';

import { ListMealTypeDto } from '@app/dtos/mealType';
import {
  ListMealTypeService,
  ShowMealTypeService,
  CreateMealTypeService,
  UpdateMealTypeService,
  DeleteMealTypeService,
} from '@app/services/mealType';

export const list = async (req: Request, res: Response) => {
  const { name } = req.query as unknown as ListMealTypeDto;
  const data = await ListMealTypeService({ name });

  res.json(data);
};

export const show = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await ShowMealTypeService(+id);

  res.json(data);
};

export const create = async (req: Request, res: Response) => {
  const { name, createdById } = req.body;
  const data = await CreateMealTypeService({ name, createdById });

  res.json(data);
};

export const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  const data = await UpdateMealTypeService(+id, { name });

  res.json(data);
};

export const destroy = async (req: Request, res: Response) => {
  const { id } = req.params;

  await DeleteMealTypeService(+id);

  res.json({ message: 'deleted' });
};
