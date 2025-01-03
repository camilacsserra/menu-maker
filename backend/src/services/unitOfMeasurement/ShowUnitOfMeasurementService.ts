import AppError from '@app/errors/appError';
import { UnitOfMeasurement } from '@app/models';

export const ShowUnitOfMeasurementService = async (id: number) => {
  const unitOfMeasurament = await UnitOfMeasurement.findByPk(id, {
    attributes: ['id', 'name'],
  });

  if (!unitOfMeasurament) {
    throw new AppError('UNIT_NOT_FOUND');
  }

  return unitOfMeasurament;
};
