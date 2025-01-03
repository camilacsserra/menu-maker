import { Router } from 'express';

import authRoutes from './authRoutes';
import ingredientRoutes from './ingredientsRoutes';
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

export default router;
