import { ShowUnitOfMeasurementService } from './ShowUnitOfMeasurementService';

export const UpdateUnitOfMeasurementService = async (
  id: number,
  data: {
    name: string;
  },
) => {
  const unitOfMeasurement = await ShowUnitOfMeasurementService(id);

  await unitOfMeasurement.update(data);

  await unitOfMeasurement.reload();

  return unitOfMeasurement;
};
