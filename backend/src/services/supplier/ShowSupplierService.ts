import Supplier from '../../models/supplier';

const ShowSupplierService = async (id: number) => {
    return await Supplier.findByPk(id, { attributes: ['id', 'name', 'order_at', 'delivery_at', 'address', 'phone_number', 'email', 'website']});
}

export default ShowSupplierService;