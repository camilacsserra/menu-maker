import { Column, Table, BelongsToMany } from 'sequelize-typescript';

import { Base } from './base';
import { IngredientSupplier } from './ingredientSuppliers';
import { Supplier } from './supplier';

@Table({
  tableName: 'Ingredients',
  timestamps: true,
})
export class Ingredient extends Base<Ingredient> {
  @Column
  name: string;

  @BelongsToMany(() => Supplier, () => IngredientSupplier)
  suppliers: Supplier[];
}
