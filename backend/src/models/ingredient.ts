import {
  AutoIncrement,
  Column,
  Model,
  PrimaryKey,
  Table,
  CreatedAt,
  UpdatedAt,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

import User from './user';

@Table({
  tableName: 'Ingredients',
  timestamps: true,
})
class Ingredient extends Model<Ingredient> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @CreatedAt
  created_at: Date;

  @ForeignKey(() => User)
  @Column
  created_by_id: number;

  @BelongsTo(() => User, { as: 'created_by', foreignKey: 'created_by_id' })
  created_by: User;

  @UpdatedAt
  updated_at: Date;

  @ForeignKey(() => User)
  @Column
  updated_by_id: number;

  @BelongsTo(() => User, { as: 'updated_by', foreignKey: 'updated_by_id' })
  updated_by: User;
}

export default Ingredient;
