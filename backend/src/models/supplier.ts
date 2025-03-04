import { Column, Table, BelongsToMany } from 'sequelize-typescript';

import { Base } from './base';
import { Ingredient } from './ingredient';
import { IngredientSupplier } from './ingredientSuppliers';

@Table({
  tableName: 'Supplier',
  timestamps: true,
})
export class Supplier extends Base<Supplier> {
  @Column
  name: string;

  @Column({ field: 'order_at' })
  orderAt: string;

  @Column({ field: 'delivery_at' })
  deliveryAt: string;

  @Column
  address: string;

  @Column({ field: 'phone_number' })
  phoneNumber: string;

  @Column
  email: string;

  @Column
  website: string;

  @BelongsToMany(() => Ingredient, () => IngredientSupplier)
  ingredients: Ingredient[];
}
