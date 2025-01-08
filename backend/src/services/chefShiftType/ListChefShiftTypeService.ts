import { Op } from 'sequelize';

import { ListChefShiftTypeDto } from '@app/dtos/chefShiftType';
import { ChefShiftType } from '@app/models/chefShiftType';

export const ListChefShiftTypeService = async (data: ListChefShiftTypeDto) => {
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

  const chefShiftType = await ChefShiftType.findAndCountAll({
    where: whereOptions,
    attributes: ['id', 'name'],
  });

  return chefShiftType;
};
