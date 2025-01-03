import AppError from '@app/errors/appError';
import { User } from '@app/models';

export const ShowUserService = async (id: number) => {
  const user = await User.findByPk(id, { attributes: ['id', 'name', 'email'] });

  if (!user) {
    throw new AppError('USER_NOT_FOUND');
  }

  return user;
};
