import { Router } from 'express';

import ingredientRoutes from './ingredientsRoutes';
import supplierRoutes from './supplierRoutes';
import userRoutes from './userRoutes';

const router = Router();

router.use(userRoutes);

router.use(supplierRoutes);

router.use(ingredientRoutes);

export default router;
