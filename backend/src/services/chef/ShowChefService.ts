import AppError from '@app/errors/appError';
import { Chef } from '@app/models';

export const ShowChefService = async (id: number) => {
  const chef = await Chef.findByPk(id, {
    attributes: ['id', 'name'],
  });

  if (!chef) {
    throw new AppError('CHEF_NOT_FOUND');
  }

  return chef;
};
