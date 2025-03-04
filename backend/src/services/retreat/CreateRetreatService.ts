import * as Yup from 'yup';

import { CreateRetreatDto } from '@app/dtos/retreat';
import { DietPreference, Retreat } from '@app/models';

import AppError from '../../errors/appError';

export const CreateRetreatService = async (data: CreateRetreatDto) => {
  const {
    name,
    numberOfParticipants,
    checkInDate,
    checkInHour,
    checkOutDate,
    checkOutHour,
    generalDietPreferences,
    hasDailyDessert,
    firstMealId,
    lastMealId,
    breakfastAt,
    lunchAt,
    dinnerAt,
    notes,
  } = data;
  const schema = Yup.object().shape({
    name: Yup.string().required('NAME_IS_REQUIRED'),
    numberOfParticipants: Yup.number()
      .integer()
      .positive()
      .required('NUMBER_OF_PARTICIPANTS_IS_REQUIRED'),
    checkInDate: Yup.date().required('CHECK_IN_DATE_IS_REQUIRED'),
    checkInHour: Yup.string()
      .matches(/^([0-1]\d|2[0-3]):([0-5]\d)$/, 'INVALID_TIME_FORMAT')
      .required('CHECK_IN_HOUR_IS_REQUIRED'),
    checkOutDate: Yup.date().required('CHECK_OUT_DATE_IS_REQUIRED'),
    checkOutHour: Yup.string()
      .matches(/^([0-1]\d|2[0-3]):([0-5]\d)$/, 'INVALID_TIME_FORMAT')
      .required('CHECK_OUT_HOUR_IS_REQUIRED'),
    generalDietPreferences: Yup.mixed<DietPreference>()
      .oneOf(Object.values(DietPreference), 'INVALID_DIET_PREFERENCE')
      .required('GENERAL_DIET_PREFERENCES_IS_REQUIRED'),
    hasDailyDessert: Yup.boolean().required('HAS_DAILY_DESSERT_IS_REQUIRED'),
    firstMealId: Yup.number()
      .integer()
      .positive()
      .required('FIRST_MEAL_ID_IS_REQUIRED'),
    lastMealId: Yup.number()
      .integer()
      .positive()
      .required('LAST_MEAL_ID_IS_REQUIRED'),
    breakfastAt: Yup.string()
      .matches(/^([0-1]\d|2[0-3]):([0-5]\d)$/, 'INVALID_TIME_FORMAT')
      .required('BREAKFAST_AT_IS_REQUIRED'),
    lunchAt: Yup.string()
      .matches(/^([0-1]\d|2[0-3]):([0-5]\d)$/, 'INVALID_TIME_FORMAT')
      .required('LUNCH_AT_IS_REQUIRED'),
    dinnerAt: Yup.string()
      .matches(/^([0-1]\d|2[0-3]):([0-5]\d)$/, 'INVALID_TIME_FORMAT')
      .required('DINNER_AT_IS_REQUIRED'),
    notes: Yup.string().nullable(),
  });

  try {
    await schema.validate(data, { abortEarly: false });
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      throw new AppError(error.errors.join(', '));
    }
    throw new AppError('VALIDATION_ERROR');
  }

  const retreat = await Retreat.create({
    name,
    numberOfParticipants,
    checkInDate,
    checkInHour,
    checkOutDate,
    checkOutHour,
    generalDietPreferences,
    hasDailyDessert,
    firstMealId,
    lastMealId,
    breakfastAt,
    lunchAt,
    dinnerAt,
    notes,
  } as unknown as Retreat);

  return retreat;
};
