import { Supplier } from '@app/models';

export const ShowSupplierService = async (id: number) => {
  return await Supplier.findByPk(id, {
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
};
