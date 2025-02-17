import { Column, Table } from 'sequelize-typescript';

import { Base } from './base';

@Table({
  tableName: 'MealType',
  timestamps: true,
})
export class MealType extends Base<MealType> {
  @Column
  name: string;
}
