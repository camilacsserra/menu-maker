import * as Yup from 'yup';

import { CreateSupplierDto } from '@app/dtos/supplier';
import { Supplier } from '@app/models';

import AppError from '../../errors/appError';

export const CreateSupplierService = async (data: CreateSupplierDto) => {
  const {
    name,
    orderAt,
    deliveryAt,
    address,
    phoneNumber,
    email,
    website,
    createdById,
    ingredientIds,
  } = data;
  const schema = Yup.object().shape({
    name: Yup.string().required('NAME_IS_REQUIRED'),
    orderAt: Yup.string().required('DATE_IS_REQUIRED'),
    deliveryAt: Yup.string().required('DATE_IS_REQUIRED'),
    address: Yup.string().required('ADDRESS_IS_REQUIRED'),
    phoneNumber: Yup.string().required('phoneNumber_IS_REQUIRED'),
    email: Yup.string().email().required('EMAIL_IS_REQUIRED'),
    website: Yup.string(),
    createdById: Yup.number().required('createdById_IS_REQUIRED'),
  });

  try {
    await schema.validate(data);
  } catch (error) {
    throw new AppError(error.message);
  }

  const supplier = await Supplier.create({
    name,
    orderAt,
    deliveryAt,
    address,
    phoneNumber,
    email,
    website,
    createdById,
  } as unknown as Supplier);

  if (ingredientIds) await supplier.$set('ingredients', ingredientIds);

  return supplier;
};
