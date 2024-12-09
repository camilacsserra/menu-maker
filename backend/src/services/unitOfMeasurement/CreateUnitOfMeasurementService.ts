import * as Yup from 'yup';

import { UnitOfMeasurement } from '@app/models';

import AppError from '../../errors/appError';

type Data = {
  name: string;
  createdById: number;
};

export const CreateUnitOfMeasurementService = async (data: Data) => {
  const { name, createdById } = data;
  const schema = Yup.object().shape({
    name: Yup.string().required('NAME_IS_REQUIRED'),
    createdById: Yup.number().required('createdById_IS_REQUIRED'),
  });

  try {
    await schema.validate(data);
  } catch (error) {
    throw new AppError(error.message);
  }

  const unitOfMeasurement = await UnitOfMeasurement.create({
    name,
    createdById,
  } as unknown as UnitOfMeasurement);

  return unitOfMeasurement;
};
