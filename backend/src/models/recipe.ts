import { Column, Table } from 'sequelize-typescript';

import { Base } from './base';

@Table({
  tableName: 'Recipes',
  timestamps: true,
})
export class Recipe extends Base<Recipe> {
  @Column
  name: string;

  @Column
  methods: string;

  @Column
  servings: number;

  @Column
  cookingTime: number;

  @Column
  dietType: string;
}
