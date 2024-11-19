import Supplier from '../../models/supplier';

const DeleteSupplierServices = async (id: number) => {
    await Supplier.destroy({ where: { id } });
};

export default DeleteSupplierServices;