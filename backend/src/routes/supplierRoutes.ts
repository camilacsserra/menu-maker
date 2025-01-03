import { Router } from 'express';

import { isAuthenticatedMiddleware } from '@app/middlewares';

import * as supplierController from './../controllers/supplierController';

const supplierRoutes = Router();

supplierRoutes.get(
  '/suppliers',
  isAuthenticatedMiddleware,
  supplierController.list,
);

supplierRoutes.get(
  '/suppliers/:id',
  isAuthenticatedMiddleware,
  supplierController.show,
);

supplierRoutes.post(
  '/suppliers',
  isAuthenticatedMiddleware,
  supplierController.create,
);

supplierRoutes.put(
  '/suppliers/:id',
  isAuthenticatedMiddleware,
  supplierController.update,
);

supplierRoutes.delete(
  '/suppliers/:id',
  isAuthenticatedMiddleware,
  supplierController.destroy,
);

export default supplierRoutes;
