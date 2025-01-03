import { Router } from 'express';

import { isAuthenticatedMiddleware } from '@app/middlewares';

import * as ingredientController from './../controllers/ingredientController';

const ingredientRoutes = Router();

ingredientRoutes.get(
  '/ingredients',
  isAuthenticatedMiddleware,
  ingredientController.list,
);

ingredientRoutes.get(
  '/ingredients/:id',
  isAuthenticatedMiddleware,
  ingredientController.show,
);

ingredientRoutes.post(
  '/ingredients',
  isAuthenticatedMiddleware,
  ingredientController.create,
);

ingredientRoutes.put(
  '/ingredients/:id',
  isAuthenticatedMiddleware,
  ingredientController.update,
);

ingredientRoutes.delete(
  '/ingredients/:id',
  isAuthenticatedMiddleware,
  ingredientController.destroy,
);

export default ingredientRoutes;
