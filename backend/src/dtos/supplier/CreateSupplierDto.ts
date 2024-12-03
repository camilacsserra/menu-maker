export type CreateSupplierDto = {
  name: string;
  orderAt: string;
  deliveryAt: string;
  address: string;
  phoneNumber: string;
  email: string;
  website: string;
  createdById: number;
  ingredientIds?: number[];
};
