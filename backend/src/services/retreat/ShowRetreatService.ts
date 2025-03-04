import AppError from '@app/errors/appError';
import { Retreat } from '@app/models';

export const ShowRetreatService = async (id: number) => {
  const retreat = await Retreat.findByPk(id, {
    attributes: [
      'id',
      'name',
      'numberOfParticipants',
      'checkInDate',
      'checkOutDate',
      'generalDietPreferences',
      'hasDailyDessert',
      'firstMealId',
      'lastMealId',
      'breakfastAt',
      'lunchAt',
      'dinnerAt',
      'duration',
      'dietPreference',
      'createdById',
    ],
  });

  if (!retreat) {
    throw new AppError('RETREAT_NOT_FOUND');
  }

  return retreat;
};
