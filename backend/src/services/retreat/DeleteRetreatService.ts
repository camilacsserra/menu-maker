import { Retreat } from '@app/models';

export const DeleteRetreatService = async (id: number) => {
  await Retreat.destroy({ where: { id }, logging: console.log });
};
