import { Op } from 'sequelize';

import { ListChefDto } from '@app/dtos/chef';
import { Chef } from '@app/models/chef';

export const ListChefService = async (data: ListChefDto) => {
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

  const chef = await Chef.findAndCountAll({
    where: whereOptions,
    attributes: ['id', 'name'],
  });

  return chef;
};
