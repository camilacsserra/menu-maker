import AppError from '@app/errors/appError';
import { User } from '@app/models';

export const DeleteUserServices = async (id: number) => {
  const deletedCount = await User.destroy({ where: { id } });

  if (deletedCount === 0) {
    throw new AppError(`ID_${id}_DOES_NOT_EXIST`);
  }
};
