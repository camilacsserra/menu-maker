import AppError from '@app/errors/appError';
import { Supplier } from '@app/models';

export const DeleteSupplierServices = async (id: number) => {
  const deletedCount = await Supplier.destroy({ where: { id } });

  if (deletedCount === 0) {
    throw new AppError(`ID_${id}_DOES_NOT_EXIST`);
  }
};
