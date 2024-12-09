import { Router } from 'express';

import * as ingredientController from './../controllers/ingredientController';

const ingredientRoutes = Router();

ingredientRoutes.get('/ingredients', ingredientController.list);

ingredientRoutes.get('/ingredients/:id', ingredientController.show);

ingredientRoutes.post('/ingredients', ingredientController.create);

ingredientRoutes.put('/ingredients/:id', ingredientController.update);

ingredientRoutes.delete('/ingredients/:id', ingredientController.destroy);

export default ingredientRoutes;
