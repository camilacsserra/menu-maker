import { Router } from 'express';

import { isAuthenticatedMiddleware } from '@app/middlewares';

import * as recipeController from '../controllers/recipeController';

const recipe = Router();

recipe.get('/recipes', isAuthenticatedMiddleware, recipeController.list);

recipe.get('/recipes/:id', isAuthenticatedMiddleware, recipeController.show);

recipe.post('/recipes', isAuthenticatedMiddleware, recipeController.create);

recipe.put('/recipes/:id', isAuthenticatedMiddleware, recipeController.update);

recipe.delete(
  '/recipes/:id',
  isAuthenticatedMiddleware,
  recipeController.destroy,
);

export default recipe;
