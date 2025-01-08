import * as Yup from 'yup';

import { CreateChefShiftTypeDto } from '@app/dtos/chefShiftType';
import { ChefShiftType } from '@app/models';

import AppError from '../../errors/appError';

export const CreateChefShiftTypeService = async (
  data: CreateChefShiftTypeDto,
) => {
  const { name, createdById } = data;
  const schema = Yup.object().shape({
    name: Yup.string().required('NAME_IS_REQUIRED'),
    createdById: Yup.number().required('ID_IS_REQUIRED'),
  });

  try {
    await schema.validate(data);
  } catch (error) {
    throw new AppError(error.message);
  }

  const chefShiftType = await ChefShiftType.create({
    name,
    createdById,
  } as unknown as ChefShiftType);

  return chefShiftType;
};
