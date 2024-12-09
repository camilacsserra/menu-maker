import { Request, Response } from 'express';

import { ListRecipeDto } from '@app/dtos/recipe';
import {
  CreateRecipeService,
  DeleteRecipeService,
  ListRecipeService,
  ShowRecipeService,
  UpdateRecipeService,
} from '@app/services/recipe';

export const list = async (req: Request, res: Response) => {
  const { name, methods, servings, cookingTime, dietType } =
    req.query as unknown as ListRecipeDto;
  const data = await ListRecipeService({
    name,
    methods,
    servings,
    cookingTime,
    dietType,
  });

  res.json(data);
};

export const show = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await ShowRecipeService(+id);

  res.json(data);
};

export const create = async (req: Request, res: Response) => {
  const { name, methods, servings, cookingTime, dietType, createdById } =
    req.body;
  const data = await CreateRecipeService({
    name,
    methods,
    servings,
    cookingTime,
    dietType,
    createdById,
  });

  res.json(data);
};

export const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, methods, servings, cookingTime, dietType } = req.body;
  const data = await UpdateRecipeService(+id, {
    name,
    methods,
    servings,
    cookingTime,
    dietType,
  });

  res.json(data);
};

export const destroy = async (req: Request, res: Response) => {
  const { id } = req.params;

  await DeleteRecipeService(+id);

  res.json({ message: 'deleted' });
};
