import AppError from '@app/errors/appError';
import { Supplier } from '@app/models';

export const ShowSupplierService = async (id: number) => {
  const supplier = await Supplier.findByPk(id, {
    attributes: [
      'id',
      'name',
      'orderAt',
      'deliveryAt',
      'address',
      'phoneNumber',
      'email',
      'website',
    ],
  });

  if (!supplier) {
    throw new AppError(`SUPPLIER_ID_${id}_DOES_NOT_EXIST`);
  }

  return supplier;
};
