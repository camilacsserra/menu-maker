import { Router } from 'express';

import * as ingredietController from './../controllers/ingredientController';

const ingredientRoutes = Router();

ingredientRoutes.get('/ingredients', ingredietController.list);
ingredientRoutes.get('/user/:id', ingredietController.show);
ingredientRoutes.post('/ingredients', ingredietController.create);
ingredientRoutes.put('/ingredients/:id', ingredietController.update);
ingredientRoutes.delete('/ingredients/:id', ingredietController.destroy);

export default ingredientRoutes;
