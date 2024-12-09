import * as Yup from 'yup';

import { CreateRecipeDto } from '@app/dtos/recipe';
import { Recipes } from '@app/models';

import AppError from '../../errors/appError';

export const CreateRecipeService = async (data: CreateRecipeDto) => {
  const { name, methods, servings, cookingTime, dietType, createdById } = data;
  const schema = Yup.object().shape({
    name: Yup.string().required('NAME_IS_REQUIRED'),
    methods: Yup.string(),
    servings: Yup.number().required('SERVINGS_IS_REQUIRED'),
    cookingTime: Yup.number(),
    dietType: Yup.string(),
    createdById: Yup.number().required('createdById_IS_REQUIRED'),
  });

  try {
    await schema.validate(data);
  } catch (error) {
    throw new AppError(error.message);
  }

  const recipes = await Recipes.create({
    name,
    methods,
    servings,
    cookingTime,
    dietType,
    createdById,
  } as unknown as Recipes);

  return recipes;
};
