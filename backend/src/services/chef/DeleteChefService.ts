import { Chef } from '@app/models';

export const DeleteChefService = async (id: number) => {
  await Chef.destroy({ where: { id }, logging: console.log });
};
