import { UpdateSupplierDto } from '@app/dtos/supplier/UpdateSupplierDto';

import { ShowSupplierService } from './ShowSupplierService';

export const UpdateSupplierService = async (
  id: number,
  data: UpdateSupplierDto,
) => {
  const supplier = await ShowSupplierService(id);

  await supplier.update(data);

  await supplier.reload();

  if (data.ingredientIds)
    await supplier.$set('ingredients', data.ingredientIds);

  return supplier;
};
