import { Router } from 'express';

import * as supplierController from './../controllers/supplierController';

const supplierRoutes = Router();

supplierRoutes.get('/suppliers', supplierController.list);

supplierRoutes.get('/user/:id', supplierController.show);

supplierRoutes.post('/suppliers', supplierController.create);

supplierRoutes.put('/suppliers/:id', supplierController.update);

supplierRoutes.delete('/suppliers/:id', supplierController.destroy);

export default supplierRoutes;
