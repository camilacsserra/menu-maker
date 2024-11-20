import * as Yup from 'yup';

import AppError from '../../errors/appError';
import Supplier from '../../models/supplier';

type Data = {
  name: string;
  order_at: string;
  delivery_at: string;
  address: string;
  phone_number: string;
  email: string;
  website: string;
  created_by_id: number;
};

const CreateSupplierService = async (data: Data) => {
  const {
    name,
    order_at,
    delivery_at,
    address,
    phone_number,
    email,
    website,
    created_by_id,
  } = data;
  const schema = Yup.object().shape({
    name: Yup.string().required('NAME_IS_REQUIRED'),
    order_at: Yup.string().required('DATE_IS_REQUIRED'),
    delivery_at: Yup.string().required('DATE_IS_REQUIRED'),
    address: Yup.string().required('ADDRESS_IS_REQUIRED'),
    phone_number: Yup.string().required('PHONE_NUMBER_IS_REQUIRED'),
    email: Yup.string().email().required('EMAIL_IS_REQUIRED'),
    website: Yup.string(),
    created_by_id: Yup.number().required('CREATED_BY_ID_IS_REQUIRED'),
  });

  try {
    await schema.validate(data);
  } catch (error) {
    throw new AppError(error.message);
  }

  const supplier = await Supplier.create({
    name,
    order_at,
    delivery_at,
    address,
    phone_number,
    email,
    website,
    created_by_id,
  } as unknown as Supplier);
  return supplier;
};

export default CreateSupplierService;
