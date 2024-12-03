import { Request, Response } from 'express';

import { ListIngredientDto } from '@app/dtos/ingredient';

import CreateIngredientService from '../services/ingredient/CreateIngredientService';
import DeleteIngredientServices from '../services/ingredient/DeleteIngredientService';
import ListIngredientService from '../services/ingredient/ListIngredientService';
import ShowIngredientService from '../services/ingredient/ShowIngredientService';
import UpdateIngredientService from '../services/ingredient/UpdateIngredientService';

export const list = async (req: Request, res: Response) => {
  const { name } = req.query as unknown as ListIngredientDto;
  const data = await ListIngredientService({ name });

  res.json(data);
};

export const show = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await ShowIngredientService(+id);

  res.json(data);
};

export const create = async (req: Request, res: Response) => {
  const { name, createdById } = req.body;
  const data = await CreateIngredientService({ name, createdById });

  res.json(data);
};

export const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  const data = await UpdateIngredientService(+id, { name });

  res.json(data);
};

export const destroy = async (req: Request, res: Response) => {
  const { id } = req.params;

  await DeleteIngredientServices(+id);

  res.json({ message: 'deleted' });
};
