import { Recipes } from '@app/models';

export const ShowRecipeService = async (id: number) => {
  return await Recipes.findByPk(id, {
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
};
