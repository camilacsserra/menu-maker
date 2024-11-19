import { Op } from 'sequelize';

import Supplier from '../../models/supplier';

const ListSupplierService = async (data: {
  name: string;
  email: string;
  order_at: string;
  delivery_at: string;
}) => {
  const { name, email, order_at, delivery_at } = data;
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
  if (order_at) {
    whereOptions = {
      ...whereOptions,
      name: {
        [Op.iLike]: `%${order_at}%`,
      },
    };
  }
  if (delivery_at) {
    whereOptions = {
      ...whereOptions,
      name: {
        [Op.iLike]: `%${delivery_at}%`,
      },
    };
  }

  const supplier = await Supplier.findAndCountAll({
    where: whereOptions,
    attributes: ['id', 'name', 'order_at', 'delivery_at'],
  });
  return supplier;
};

export default ListSupplierService;
