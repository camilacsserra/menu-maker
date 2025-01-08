import { Column, Table } from 'sequelize-typescript';

import { Base } from './base';

@Table({
  tableName: 'Chefs',
  timestamps: true,
})
export class Chef extends Base<Chef> {
  @Column
  name: string;
}
