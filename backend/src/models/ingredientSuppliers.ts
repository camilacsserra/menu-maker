import { Table, Column, ForeignKey, BelongsTo } from 'sequelize-typescript';

import { BaseConnection } from './baseConnection';
import { Ingredient } from './ingredient';
import { Supplier } from './supplier';

@Table({
  tableName: 'IngredientSuppliers',
  timestamps: true,
})
export class IngredientSupplier extends BaseConnection<IngredientSupplier> {
  @ForeignKey(() => Ingredient)
  @Column({ field: 'ingredient_id' })
  ingredientId: number;

  @ForeignKey(() => Supplier)
  @Column({ field: 'supplier_id' })
  supplierId: number;

  @BelongsTo(() => Ingredient)
  ingredient: Ingredient;

  @BelongsTo(() => Supplier)
  supplier: Supplier;
}
