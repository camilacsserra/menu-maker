import { Op } from 'sequelize';

import User from '../../models/user';

const ListUserService = async (data: { name: string; email: string }) => {
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

export default ListUserService;
