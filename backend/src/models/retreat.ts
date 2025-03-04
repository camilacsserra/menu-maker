import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Table,
} from 'sequelize-typescript';

import { Base } from './base';
import { MealType } from './mealType';

export enum DietPreference {
  REGULAR = 'regular',
  VEGETARIAN = 'vegetarian',
  VEGAN = 'vegan',
  GLUTEN_FREE = 'gluten_free', // Avoids issues with dashes
}

@Table({
  tableName: 'Retreats',
  timestamps: true,
})
export class Retreat extends Base<Retreat> {
  @Column
  name: string;

  @Column
  numberOfParticipants: number;

  @Column(DataType.DATE)
  checkInDate: Date;

  @Column(DataType.TIME)
  checkInHour: Date;

  @Column(DataType.DATE)
  checkOutDate: Date;

  @Column(DataType.TIME)
  checkOutHour: Date;

  @Column(DataType.ENUM(...Object.values(DietPreference)))
  generalDietPreferences: DietPreference;

  @Column(DataType.BOOLEAN)
  hasDailyDessert: boolean;

  @ForeignKey(() => MealType)
  @Column({ field: 'first_meal_id' })
  firstMealId: number;

  @BelongsTo(() => MealType, { as: 'firstMeal', foreignKey: 'first_meal_id' })
  firstMeal: MealType;

  @ForeignKey(() => MealType)
  @Column({ field: 'last_meal_id' })
  lastMealId: number;

  @BelongsTo(() => MealType, { as: 'lastMeal', foreignKey: 'last_meal_id' })
  lastMeal: MealType;

  @Column(DataType.TIME)
  breakfastAt: Date;

  @Column(DataType.TIME)
  lunchAt: Date;

  @Column(DataType.TIME)
  dinnerAt: Date;

  @Column(DataType.TEXT)
  notes: string;
}
