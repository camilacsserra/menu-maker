import { Column, Table } from 'sequelize-typescript';

import { Base } from './base';

@Table({
  tableName: 'UnitsOfMeasurement',
  timestamps: true,
})
export class UnitOfMeasurement extends Base<UnitOfMeasurement> {
  @Column
  name: string;
}
