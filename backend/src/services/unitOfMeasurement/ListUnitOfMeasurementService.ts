import { Op } from 'sequelize';

import { ListUnitOfMeasurementDto } from '@app/dtos/unitOfMeasurements/ListUnitOfMeasurementDto';
import { UnitOfMeasurement } from '@app/models';

export const ListUnitOfMeasurementService = async (
  data: ListUnitOfMeasurementDto,
) => {
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

  const unitOfMeasurement = await UnitOfMeasurement.findAndCountAll({
    where: whereOptions,
    attributes: ['id', 'name'],
  });

  return unitOfMeasurement;
};
