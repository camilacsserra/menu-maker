import { Router } from 'express';

import { isAuthenticatedMiddleware } from '@app/middlewares';

import * as userController from './../controllers/userController';

const userRoutes = Router();

userRoutes.get('/users', isAuthenticatedMiddleware, userController.list);

userRoutes.get('/users/:id', isAuthenticatedMiddleware, userController.show);

userRoutes.post('/users', isAuthenticatedMiddleware, userController.create);

userRoutes.put('/users/:id', isAuthenticatedMiddleware, userController.update);

userRoutes.delete(
  '/users/:id',
  isAuthenticatedMiddleware,
  userController.destroy,
);

export default userRoutes;
