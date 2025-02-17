import { MealType } from '@app/models';

export const DeleteMealTypeService = async (id: number) => {
  await MealType.destroy({ where: { id } });
};
