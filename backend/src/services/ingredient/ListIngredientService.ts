import { Op } from 'sequelize';

import { ListIngredientDto } from '@app/dtos/ingredient';
import { Ingredient } from '@app/models/ingredient';

const ListIngredientService = async (data: ListIngredientDto) => {
  const { name } = data;
  let whereOptions = {};

  if (name) {
    whereOptions = {
      ...whereOptions,
      name: {
        [Op.iLike]: `%${name}%`,
      },
    };
  }

  const ingredient = await Ingredient.findAndCountAll({
    where: whereOptions,
    attributes: ['id', 'name'],
  });

  return ingredient;
};

export default ListIngredientService;
