import { DietPreference } from '@app/models';

export type CreateRetreatDto = {
  name: string;
  numberOfParticipants: number;
  checkInDate: string;
  checkInHour: string;
  checkOutDate: string;
  checkOutHour: string;
  generalDietPreferences: DietPreference;
  hasDailyDessert: boolean;
  firstMealId: number;
  lastMealId: number;
  breakfastAt: string;
  lunchAt: string;
  dinnerAt: string;
  notes: string;
  createdById: number;
};
