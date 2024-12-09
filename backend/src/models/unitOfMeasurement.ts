import { Column, Table } from 'sequelize-typescript';

import { Base } from './base';

@Table({
  tableName: 'UnitOfMeasurement',
  timestamps: true,
})
export class UnitOfMeasurement extends Base<UnitOfMeasurement> {
  @Column
  name: string;
}
