import { DietPreference } from '@app/models';

export type UpdateRetreatDto = {
  name: string;
  numberOfParticipants: number;
  checkInDate: Date;
  checkInHour: Date;
  checkOutDate: Date;
  checkOutHour: Date;
  generalDietPreferences: DietPreference;
  hasDailyDessert: boolean;
  firstMealId: number;
  lastMealId: number;
  breakfastAt: Date;
  lunchAt: Date;
  dinnerAt: Date;
  notes: string;
  createdById: number;
};
