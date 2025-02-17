import { Router } from 'express';

import authRoutes from './authRoutes';
import chefRoutes from './chefRoutes';
import chefShiftTypeRoutes from './chefShiftTypeRoutes';
import ingredientRoutes from './ingredientsRoutes';
import mealTypeRoutes from './mealTypeRoutes';
import recipeRoutes from './recipeRoutes';
import supplierRoutes from './supplierRoutes';
import unitOfMeasurementRoutes from './unitOfMeasurementRoutes';
import userRoutes from './userRoutes';

const router = Router();

router.use(userRoutes);

router.use(supplierRoutes);

router.use(ingredientRoutes);

router.use(unitOfMeasurementRoutes);

router.use(recipeRoutes);

router.use(authRoutes);

router.use(chefRoutes);

router.use(chefShiftTypeRoutes);

router.use(mealTypeRoutes);

export default router;
