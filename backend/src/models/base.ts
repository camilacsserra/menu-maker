import {
  AutoIncrement,
  Column,
  Model,
  PrimaryKey,
  CreatedAt,
  UpdatedAt,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

import { User } from './user';

export class Base<T> extends Model<T> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @CreatedAt
  @Column({ field: 'created_at' })
  createdAt: Date;

  @ForeignKey(() => User)
  @Column({ field: 'created_by_id' })
  createdById: number;

  @BelongsTo(() => User, { as: 'created_by', foreignKey: 'created_by_id' })
  createdBy: User;

  @UpdatedAt
  @Column({ field: 'updated_at' })
  updatedAt: Date;

  @ForeignKey(() => User)
  @Column({ field: 'updated_by_id' })
  updatedById: number;

  @BelongsTo(() => User, { as: 'updated_by', foreignKey: 'updated_by_id' })
  updatedBy: User;
}
