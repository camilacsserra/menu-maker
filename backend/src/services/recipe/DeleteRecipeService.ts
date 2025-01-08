import { Recipe } from '@app/models';

export const DeleteRecipeService = async (id: number) => {
  await Recipe.destroy({ where: { id }, logging: console.log });
};
