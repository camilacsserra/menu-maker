import { Recipes } from '@app/models';

export const DeleteRecipeService = async (id: number) => {
  await Recipes.destroy({ where: { id }, logging: console.log });
};
