export type UpdateSupplierDto = {
  name: string;
  orderAt: string;
  deliveryAt: string;
  address: string;
  phoneNumber: string;
  email: string;
  website: string;
  createdById: number;
  updatedById: number;
  ingredientIds: number[];
};
