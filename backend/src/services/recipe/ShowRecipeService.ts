import AppError from '@app/errors/appError';
import { Recipes } from '@app/models';

export const ShowRecipeService = async (id: number) => {
  const recipe = await Recipes.findByPk(id, {
    attributes: [
      'id',
      'name',
      'methods',
      'servings',
      'cookingTime',
      'dietType',
      'createdById',
    ],
  });

  if (!recipe) {
    throw new AppError('RECIPE_NOT_FOUND');
  }

  return recipe;
};
