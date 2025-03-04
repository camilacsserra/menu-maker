import { Op } from 'sequelize';

import { ListRetreatDto } from '@app/dtos/retreat';
import { Retreat } from '@app/models';

export const ListRetreatService = async (data: ListRetreatDto) => {
  const { name, checkInDate, checkOutDate } = data;
  let whereOptions = {};

  if (name) {
    whereOptions = {
      ...whereOptions,
      name: {
        [Op.iLike]: `%${name}%`,
      },
    };
  }

  if (checkInDate) {
    whereOptions = {
      ...whereOptions,
      checkInDate: {
        [Op.gte]: checkInDate,
      },
    };
  }

  if (checkOutDate) {
    whereOptions = {
      ...whereOptions,
      checkOutDate: {
        [Op.lte]: checkOutDate,
      },
    };
  }

  const retreats = await Retreat.findAndCountAll({
    where: whereOptions,
    attributes: ['id', 'name', 'checkInDate', 'checkOutDate'],
  });

  return retreats;
};
