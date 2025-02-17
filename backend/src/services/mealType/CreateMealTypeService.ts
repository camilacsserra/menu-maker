import * as Yup from 'yup';

import { CreateMealTypeDto } from '@app/dtos/mealType';
import AppError from '@app/errors/appError';
import { MealType } from '@app/models';

export const CreateMealTypeService = async (data: CreateMealTypeDto) => {
  const { name, createdById } = data;
  const schema = Yup.object().shape({
    name: Yup.string().required(),
    createdById: Yup.number().required(),
  });

  try {
    await schema.validate(data);
  } catch (error) {
    throw new AppError(error.message);
  }

  const mealType = await MealType.create({
    name,
    createdById,
  } as unknown as MealType);

  return mealType;
};
