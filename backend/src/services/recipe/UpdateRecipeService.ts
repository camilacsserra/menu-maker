import { UpdateRecipeDto } from '@app/dtos/recipe';

import { ShowRecipeService } from './ShowRecipeService';

export const UpdateRecipeService = async (
  id: number,
  data: UpdateRecipeDto,
) => {
  const recipe = await ShowRecipeService(id);

  await recipe.update(data);

  await recipe.reload();

  return recipe;
};
