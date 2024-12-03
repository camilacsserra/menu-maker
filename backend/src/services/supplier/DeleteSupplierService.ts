import { Supplier } from '@app/models';

export const DeleteSupplierServices = async (id: number) => {
  await Supplier.destroy({ where: { id } });
};
