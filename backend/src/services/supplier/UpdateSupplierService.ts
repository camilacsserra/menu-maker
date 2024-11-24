import ShowSupplierService from './ShowSupplierService';

const UpdateSupplierService = async (
  id: number,
  data: {
    name: string;
    order_at: string;
    delivery_at: string;
    address: string;
    phone_number: string;
    email: string;
    website: string;
    created_by_id: number;
    updated_by_id: number;
  },
) => {
  const supplier = await ShowSupplierService(id);
  await supplier.update(data);
  await supplier.reload();
  return supplier;
};

export default UpdateSupplierService;
