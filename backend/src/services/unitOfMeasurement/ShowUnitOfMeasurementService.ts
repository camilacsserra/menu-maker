import { UnitOfMeasurement } from '@app/models';

export const ShowUnitOfMeasurementService = async (id: number) => {
  return await UnitOfMeasurement.findByPk(id, {
    attributes: ['id', 'name'],
  });
};
