import AppError from '@app/errors/appError';
import { MealType } from '@app/models';

export const ShowMealTypeService = async (id: number) => {
  const mealType = await MealType.findByPk(id, {
    attributes: ['id', 'name', 'createdById'],
  });

  if (!mealType) {
    throw new AppError('MEAL_TYPE_NOT_FOUND');
  }

  return mealType;
};
