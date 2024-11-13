import {
  AutoIncrement,
  Column,
  Model,
  PrimaryKey,
  Table,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';

@Table
class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @Column
  email: string;

  @Column
  password: string;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;
}

export default User;
