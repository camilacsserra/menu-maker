import { Router } from 'express';

import { isAuthenticatedMiddleware } from '@app/middlewares';

import * as chefController from '../controllers/chefController';

const chef = Router();

chef.get('/chefs', isAuthenticatedMiddleware, chefController.list);

chef.get('/chefs/:id', isAuthenticatedMiddleware, chefController.show);

chef.post('/chefs', isAuthenticatedMiddleware, chefController.create);

chef.put('/chefs/:id', isAuthenticatedMiddleware, chefController.update);

chef.delete('/chefs/:id', isAuthenticatedMiddleware, chefController.destroy);

export default chef;
