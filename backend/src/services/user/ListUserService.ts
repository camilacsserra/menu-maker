import { Op } from 'sequelize';

import { ListUserDto } from '@app/dtos/user';
import { User } from '@app/models/user';

export const ListUserService = async (data: ListUserDto) => {
  const { name, email } = data;
  let whereOptions = {};

  if (name) {
    whereOptions = {
      ...whereOptions,
      name: {
        [Op.iLike]: `%${name}%`,
      },
    };
  }

  if (email) {
    whereOptions = {
      ...whereOptions,
      name: {
        [Op.iLike]: `%${email}%`,
      },
    };
  }
  const users = await User.findAndCountAll({
    where: whereOptions,
    attributes: ['id', 'name', 'email'],
  });

  return users;
};
