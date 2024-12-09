import { Router } from 'express';

import * as unitOfMeasurementController from './../controllers/unitOfMeasurementController';

const unitOfMeasurementRoutes = Router();

unitOfMeasurementRoutes.get(
  '/unit-of-measurements',
  unitOfMeasurementController.list,
);

unitOfMeasurementRoutes.get(
  '/unit-of-measurements/:id',
  unitOfMeasurementController.show,
);

unitOfMeasurementRoutes.post(
  '/unit-of-measurements',
  unitOfMeasurementController.create,
);

unitOfMeasurementRoutes.put(
  '/unit-of-measurements/:id',
  unitOfMeasurementController.update,
);

unitOfMeasurementRoutes.delete(
  '/unit-of-measurements/:id',
  unitOfMeasurementController.destroy,
);

export default unitOfMeasurementRoutes;
