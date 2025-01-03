import { Router } from 'express';

import { isAuthenticatedMiddleware } from '@app/middlewares';

import * as unitOfMeasurementController from './../controllers/unitOfMeasurementController';

const unitOfMeasurementRoutes = Router();

unitOfMeasurementRoutes.get(
  '/units-of-measurement',
  isAuthenticatedMiddleware,
  unitOfMeasurementController.list,
);

unitOfMeasurementRoutes.get(
  '/units-of-measurement/:id',
  isAuthenticatedMiddleware,
  unitOfMeasurementController.show,
);

unitOfMeasurementRoutes.post(
  '/units-of-measurement',
  isAuthenticatedMiddleware,
  unitOfMeasurementController.create,
);

unitOfMeasurementRoutes.put(
  '/units-of-measurement/:id',
  isAuthenticatedMiddleware,
  unitOfMeasurementController.update,
);

unitOfMeasurementRoutes.delete(
  '/units-of-measurement/:id',
  isAuthenticatedMiddleware,
  unitOfMeasurementController.destroy,
);

export default unitOfMeasurementRoutes;
