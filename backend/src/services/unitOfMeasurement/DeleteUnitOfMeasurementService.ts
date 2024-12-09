import { UnitOfMeasurement } from '@app/models';

export const DeleteUnitOfMeasurementService = async (id: number) => {
  await UnitOfMeasurement.destroy({ where: { id } });
};
