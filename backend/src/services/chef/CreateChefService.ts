import * as Yup from 'yup';

import { CreateChefDto } from '@app/dtos/chef';
import AppError from '@app/errors/appError';
import { Chef } from '@app/models';

export const CreateChefService = async (data: CreateChefDto) => {
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

  const chef = await Chef.create({
    name,
    createdById,
  } as unknown as Chef);

  return chef;
};
