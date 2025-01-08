import { ChefShiftType } from '@app/models';

export const DeleteChefShiftTypeService = async (id: number) => {
  await ChefShiftType.destroy({ where: { id }, logging: console.log });
};
