import { UpdateSupplierDto } from '@app/dtos/supplier/UpdateSupplierDto';
import AppError from '@app/errors/appError';
import { Ingredient } from '@app/models';

import { ShowSupplierService } from './ShowSupplierService';

export const UpdateSupplierService = async (
  id: number,
  data: UpdateSupplierDto,
) => {
  const supplier = await ShowSupplierService(id);

  if (!supplier) {
    throw new AppError(`SUPPLIER_ID_${id}_DOES_NOT_EXIST`);
  }

  await supplier.update(data);

  await supplier.reload();

  if (data.ingredientIds && data.ingredientIds.length > 0) {
    const existingIngredients = await Ingredient.findAll({
      where: { id: data.ingredientIds },
      attributes: ['id'],
    });

    const existingIds = existingIngredients.map((ingredient) => ingredient.id);

    const invalidIds = data.ingredientIds.filter(
      (id) => !existingIds.includes(id),
    );

    if (invalidIds.length > 0) {
      throw new AppError(`INVALID_INGREDIENT_IDS_${invalidIds.join('_ ')}`);
    }

    await supplier.$set('ingredients', existingIds);
  }

  return supplier;
};
