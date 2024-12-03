export type ListSupplierDto = {
  name: string;
  email: string;
  orderAt: string;
  deliveryAt: string;
  ingredientIds?: number[];
};
