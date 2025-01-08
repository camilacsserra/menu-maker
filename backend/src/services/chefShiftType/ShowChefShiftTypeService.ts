import AppError from '@app/errors/appError';
import { ChefShiftType } from '@app/models';

export const ShowChefShiftTypeService = async (id: number) => {
  const chefShiftType = await ChefShiftType.findByPk(id, {
    attributes: ['id', 'name'],
  });

  if (!chefShiftType) {
    throw new AppError('CHEF_SHIFT_TYPE_NOT_FOUND');
  }

  return chefShiftType;
};
