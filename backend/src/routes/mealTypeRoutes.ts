import { Router } from 'express';

import { isAuthenticatedMiddleware } from '@app/middlewares';

import * as mealTypeController from './../controllers/mealTypeController';

const mealTypeRoutes = Router();

mealTypeRoutes.get(
  '/meal-type',
  isAuthenticatedMiddleware,
  mealTypeController.list,
);

mealTypeRoutes.get(
  '/meal-type/:id',
  isAuthenticatedMiddleware,
  mealTypeController.show,
);

mealTypeRoutes.post(
  '/meal-type',
  isAuthenticatedMiddleware,
  mealTypeController.create,
);

mealTypeRoutes.put(
  '/meal-type/:id',
  isAuthenticatedMiddleware,
  mealTypeController.update,
);

mealTypeRoutes.delete(
  '/meal-type/:id',
  isAuthenticatedMiddleware,
  mealTypeController.destroy,
);

export default mealTypeRoutes;
