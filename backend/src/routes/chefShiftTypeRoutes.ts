import { Router } from 'express';

import { isAuthenticatedMiddleware } from '@app/middlewares';

import * as chefShiftTypeController from '../controllers/chefShiftTypeController';

const chefShiftType = Router();

chefShiftType.get(
  '/chefShiftTypes',
  isAuthenticatedMiddleware,
  chefShiftTypeController.list,
);

chefShiftType.get(
  '/chefShiftTypes/:id',
  isAuthenticatedMiddleware,
  chefShiftTypeController.show,
);

chefShiftType.post(
  '/chefShiftTypes',
  isAuthenticatedMiddleware,
  chefShiftTypeController.create,
);

chefShiftType.put(
  '/chefShiftTypes/:id',
  isAuthenticatedMiddleware,
  chefShiftTypeController.update,
);

chefShiftType.delete(
  '/chefShiftTypes/:id',
  isAuthenticatedMiddleware,
  chefShiftTypeController.destroy,
);

export default chefShiftType;
