import { Router } from 'express';

import * as recipeController from '../controllers/recipeController';

const recipe = Router();

recipe.get('/recipes', recipeController.list);

recipe.get('/recipes/:id', recipeController.show);

recipe.post('/recipes', recipeController.create);

recipe.put('/recipes/:id', recipeController.update);

recipe.delete('/recipes/:id', recipeController.destroy);

export default recipe;
