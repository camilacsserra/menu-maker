import { Op } from 'sequelize';

import Ingredient from '../../models/ingredient';

const ListIngredientService = async (data: { name: string }) => {
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
