import { Op } from 'sequelize';

import { ListRecipeDto } from '@app/dtos/recipe';
import { Recipes } from '@app/models';

export const ListRecipeService = async (data: ListRecipeDto) => {
  const { name, cookingTime, dietType } = data;
  let whereOptions = {};

  if (name) {
    whereOptions = {
      ...whereOptions,
      name: {
        [Op.iLike]: `%${name}%`,
      },
    };
  }

  if (cookingTime) {
    whereOptions = {
      ...whereOptions,
      name: {
        [Op.iLike]: `%${cookingTime}%`,
      },
    };
  }

  if (dietType) {
    whereOptions = {
      ...whereOptions,
      name: {
        [Op.iLike]: `%${dietType}%`,
      },
    };
  }

  const recipe = await Recipes.findAndCountAll({
    where: whereOptions,
    attributes: ['id', 'name', 'cookingTime', 'dietType'],
  });

  return recipe;
};
