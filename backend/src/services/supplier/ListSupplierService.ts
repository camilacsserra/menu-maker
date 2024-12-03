import { literal, Op } from 'sequelize';

import { ListSupplierDto } from '@app/dtos/supplier';
import { Ingredient } from '@app/models';
import { Supplier } from '@app/models/supplier';

export const ListSupplierService = async (data: ListSupplierDto) => {
  const { name, email, orderAt, deliveryAt, ingredientIds } = data;
  let whereOptions = {};

  if (name) {
    whereOptions = {
      ...whereOptions,
      name: {
        [Op.iLike]: `%${name}%`,
      },
    };
  }

  if (email) {
    whereOptions = {
      ...whereOptions,
      name: {
        [Op.iLike]: `%${email}%`,
      },
    };
  }

  if (orderAt) {
    whereOptions = {
      ...whereOptions,
      name: {
        [Op.iLike]: `%${orderAt}%`,
      },
    };
  }

  if (deliveryAt) {
    whereOptions = {
      ...whereOptions,
      name: {
        [Op.iLike]: `%${deliveryAt}%`,
      },
    };
  }

  if (ingredientIds?.length) {
    whereOptions = {
      ...whereOptions,
      id: {
        [Op.and]: [
          literal(
            `"Supplier".id in (select "supplier_id" from "IngredientSuppliers" where "IngredientSuppliers"."ingredient_id" in (${ingredientIds.join(',')}))`,
          ),
        ],
      },
    };
  }
  const supplier = await Supplier.findAndCountAll({
    where: whereOptions,
    include: [{ model: Ingredient, attributes: ['id', 'name'] }],
    attributes: ['id', 'name', 'orderAt', 'deliveryAt'],
  });

  return supplier;
};
