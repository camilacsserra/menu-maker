import { Request, Response } from 'express';

import CreateIngredientService from '../services/ingredient/CreateIngredientService';
import DeleteIngredientServices from '../services/ingredient/DeleteIngredientService';
import ListIngredientService from '../services/ingredient/ListIngredientService';
import ShowIngredientService from '../services/ingredient/ShowIngredientService';
import UpdateIngredientService from '../services/ingredient/UpdateIngredientService';

export const list = async (req: Request, res: Response) => {
  const { name, created_by_id } = req.query;
  const data = await ListIngredientService({ name, created_by_id } as any);
  res.json(data);
};

export const show = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await ShowIngredientService(+id);
  res.json(data);
};

export const create = async (req: Request, res: Response) => {
  const { name, created_by_id } = req.body;
  const data = await CreateIngredientService({ name, created_by_id });
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
