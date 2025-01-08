import { UpdateChefShiftTypeDto } from '@app/dtos/chefShiftType';

import { ShowChefShiftTypeService } from './ShowChefShiftTypeService';

export const UpdateChefShiftTypeService = async (
  id: number,
  data: UpdateChefShiftTypeDto,
) => {
  const chefShiftType = await ShowChefShiftTypeService(id);

  await chefShiftType.update(data);

  await chefShiftType.reload();

  return chefShiftType;
};
