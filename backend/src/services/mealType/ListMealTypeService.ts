import { Op } from 'sequelize';

import { ListMealTypeDto } from '@app/dtos/mealType';
import { MealType } from '@app/models';

export const ListMealTypeService = async (data: ListMealTypeDto) => {
  const { name } = data;
  let whereOptions = {};

  if (name) {
    whereOptions = {
      ...whereOptions,
      name: { [Op.iLike]: `%${name}%` },
    };
  }

  const mealTypes = await MealType.findAndCountAll({
    where: whereOptions,
    attributes: ['id', 'name'],
  });

  return mealTypes;
};
