import { Column, Table } from 'sequelize-typescript';

import { Base } from './base';

@Table({
  tableName: 'chefShiftType',
  timestamps: true,
})
export class ChefShiftType extends Base<ChefShiftType> {
  @Column
  name: string;
}
