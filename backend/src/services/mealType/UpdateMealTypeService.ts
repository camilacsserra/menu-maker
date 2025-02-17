import { UpdateMealTypeDto } from '@app/dtos/mealType';

import { ShowMealTypeService } from './ShowMealTypeService';

export const UpdateMealTypeService = async (
  id: number,
  data: UpdateMealTypeDto,
) => {
  const mealType = await ShowMealTypeService(id);

  await mealType.update(data);

  await mealType.reload();

  return mealType;
};
