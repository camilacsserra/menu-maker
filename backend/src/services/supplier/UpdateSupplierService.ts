import ShowSupplierService from './ShowSupplierService';

const UpdateUserService = async (
  id: number,
  data: {
    name: string;
    order_at: string;
    delivery_at: string;
    address: string;
    phone_number: string;
    email: string;
    website: string;
  },
) => {
  const supplier = await ShowSupplierService(id);
  await supplier.update(data);
  await supplier.reload();
  return supplier;
};

export default UpdateUserService;
